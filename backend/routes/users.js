// Third-Party modules
const express = require('express');

// Own modules
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

const { protect, authorize } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

// router.use(protect);
// router.use(authorize('admin'));

// /api/v1/users/
router.route('/').get(protect, getUsers).post(protect, createUser);

// /api/v1/users/:id
router
  .route('/:id')
  .get(getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

module.exports = router;
