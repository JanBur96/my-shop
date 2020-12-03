// Third-Party modules
const express = require('express');

// Own modules
const {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  productPhotoUpload,
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
      select: 'name',
    }),
    getProducts
  )
  .post(protect, createProduct);

// /api/v1/products/:id
router
  .route('/:id')
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

// /api/v1/products/:id/photo
router.route('/:id/photo').put(protect, productPhotoUpload);

module.exports = router;
