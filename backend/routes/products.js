const express = require('express');

const {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  productPhotoUpload,
  getProductsByName,
} = require('../controllers/products');

const Product = require('../models/Product');
const advancedResults = require('../middleware/advancedResults');
const { protect } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

// /api/v1/products/
router
  .route('/')
  .get(
    advancedResults(Product, {
      path: 'user',
      select: ['name', 'location'],
    }),
    getProducts
  )
  .post(protect, createProduct);

router.route('/search/:search').get(getProductsByName);

// /api/v1/products/:id
router
  .route('/:id')
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

// /api/v1/products/:id/photo
router.route('/:id/photo').put(protect, productPhotoUpload);

module.exports = router;
