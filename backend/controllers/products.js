const path = require('path');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Product = require('../models/Product');
const User = require('../models/User');

// @desc      Get all products
// @route     GET /api/v1/products
// @access    Private
exports.getProducts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.getProductsByName = asyncHandler(async (req, res, next) => {
  const product = await Product.find({ $text: { $search: req.params.search } });

  res.status(200).json({
    success: true,
    data: product,
  });
});

// @desc      Create a new product
// @route     POST /api/v1/products
// @access    Private
exports.createProduct = asyncHandler(async (req, res, next) => {
  // We've stored the user details thanks to the auth middleware
  req.body.user = req.user.id;

  const product = await Product.create(req.body);

  // req.user.products.push(product);

  const user = await User.findById(req.user.id);

  user.products.push(product.id);
  await user.save();

  res.status(200).json({
    success: true,
    data: product,
    user,
  });
});

// @desc      Get single product by id
// @route     GET /api/v1/products
// @access    Private
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(
        `There is no product with the id of | ${req.params.id} | in the database.`
      ),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

// @desc      Update single product
// @route     PUT /api/v1/products/:id
// @access    Private
exports.updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(
      new ErrorResponse(
        `There is no product with the id of | ${req.params.id} | in the database.`
      ),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

// @desc      Delete single product
// @route     DELETE /api/v1/products/:id
// @access    Private
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(
        `There is no product with the id of | ${req.params.id} | in the database.`
      ),
      404
    );
  }

  // Make sure user is product owner
  if (product.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete product ${product._id}`,
        401
      )
    );
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc    Upload photo for product
// @route   PUT /api/v1/products/:id/photo
// @access  Private
exports.productPhotoUpload = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(
        `There is no product with the id of | ${req.params.id} | in the database.`,
        404
      )
    );
  }

  // Make sure user is product owner
  if (product.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User with the id of | ${req.params.id} | is not authorized to update this product`,
        401
      )
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  // Create custom filename
  file.name = `photo_${product._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Product.findByIdAndUpdate(req.params.id, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
