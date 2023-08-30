const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const { getProducts,getSingleProduct,updatedProduct,deleteProduct} = require('../controllers/productController');

// Get all products
router.get('/', getProducts);

// Get product by id
router.get('/:id', getSingleProduct);

// Update a product
router.put('/:id', getProducts );

// Create a product
router.post('/',updatedProduct );

// Delete a product
router.delete('/:id', deleteProduct );

module.exports = router;
