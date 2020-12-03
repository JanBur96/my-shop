// Third-Party modules
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Own modules
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect do database
connectDB();

// Route files (own modules)
const users = require('./routes/users');
const products = require('./routes/products');
const auth = require('./routes/auth');

// Use express
const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// File uploading
app.use(fileUpload());

app.use(cors());

// Mount routers
app.use('/api/v1/users', users);
app.use('/api/v1/products', products);
app.use('/api/v1/auth', auth);

// Mount errorHandler
app.use(errorHandler);

// Declaring Port
const PORT = process.env.PORT || 5000;

// Starting Server
const server = app.listen(
  PORT,
  console.log(`Server is running on port ${PORT}`.yellow.bold)
);
