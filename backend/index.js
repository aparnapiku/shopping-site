const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRouter = require('./routes/productRouts')

const app= express();

const mongodbURI = process.env.MONGODB_URI;

mongoose.connect(mongodbURI, {
    maxPoolSize: 10,
})

const db =mongoose.connection;


db.on('error', console.error.bind(console, 'Mongodb connection error'));

db.once('open', () => {
    console.log('connected to database successfully');
})

app.get('/', function(req, res){
    res.send('Hello server');
});
app.use(express.json)
app.use(productRouter);

app.listen(3000, '0.0.0.0', () => {
    console.log('server started at port 3000');
});
