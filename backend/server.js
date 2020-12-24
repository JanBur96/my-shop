const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const users = require('./routes/users');
const products = require('./routes/products');
const auth = require('./routes/auth');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(cors());

app.use('/api/v1/users', users);
app.use('/api/v1/products', products);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const server = app.listen(
  PORT,
  console.log(`Server is running on port ${PORT}`.yellow.bold)
);
