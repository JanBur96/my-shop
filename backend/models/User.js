const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 8,
    select: false,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      // Can't get populated without this
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  location: {
    type: String,
    required: false,
    default: 'No location available',
  },
  rating: {
    type: Number,
    required: false,
  },
  follows: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  wishlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
});

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  // Strength of the encryption
  const salt = await bcrypt.genSalt(10);

  // Hashing the password
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered password to hashed password in DB
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
