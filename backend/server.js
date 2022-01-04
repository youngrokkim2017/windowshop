require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const products = require('./routes/products');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', products)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))