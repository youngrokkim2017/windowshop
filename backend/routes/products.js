const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controller/productControllers');

// GET all products
// GET to /api/products
router.get('/', getAllProducts)

// GET a product by ID from db
// GET to /api/products/:id
router.get('/:id', getProductById)

module.exports = router;