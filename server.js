const express = require('express');
const mongoose = require('mongoose')
const Product = require ('./models/productModel')
const app = express();

// midleware
app.use(express.json())

// routes

app.get('/',(req, res)=>{
    res.send('hello node api my name is Arinait likaj')
})

app.listen(3000, ()=>{
    console.log('Node api is running on port 3000')
})

// get all products
app.get('/product', async (req, res)=> {
    try {
        const product = await Product.find({});
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// get product by id
app.get('/product/:id', async (req, res)=> {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

// update a product
app.get('/product/:id', async (req, res)=> {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product){
            return res.status(404).json({message: 'canot find this element'})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

// create a product
app.post('/product', async (req, res)=>{
    try {
        
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


// delete a product
app.get('/product/:id', async (req, res)=> {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product){
            return res.status(404).json({message: 'canot find this element'})
        }
       
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

mongoose
.connect('mongodb+srv://admin:1234@cluster0.ysmb6ui.mongodb.net/').
then(()=>{
    console.log('conected to mongodb')
}).catch((error)=>{
    console.log(error)
})