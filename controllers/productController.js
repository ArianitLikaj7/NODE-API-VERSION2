const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler')
const createProduct = asyncHandler (async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const getSingleProduct = asyncHandler (async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const getProducts = asyncHandler (async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500)
        throw new Error(error.message)
    }
})

const updatedProduct = asyncHandler (async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: 'Cannot find this element' });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const deleteProduct = asyncHandler (async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Cannot find this element' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500)
        throw new Error(error.message) 
    }
})

module.exports = {
    getProducts,
    getSingleProduct,
    getProducts,
    updatedProduct,
    deleteProduct
};
