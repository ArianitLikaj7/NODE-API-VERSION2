require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const Product = require('../Node-API/models/productModel')
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')

const app = express();

const productRoute = require('./routes/productRoute');

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND ,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));


// midleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api/products', productRoute);

app.get('/',(req, res)=>{
   throw new Error('fake error');
})


app.get('/',(req, res)=>{
    res.send('hello node api my name is Arinait likaj')
})

app.use(errorMiddleware);

app.listen(PORT, ()=>{
    console.log('Node api is running on port ' + PORT)
})



mongoose
.connect(MONGO_URL).
then(()=>{
    console.log('conected to mongodb')
}).catch((error)=>{
    console.log(error)
})