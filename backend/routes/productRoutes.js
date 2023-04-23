const express = require('express')

const router = express.Router();

const productController = require('../controllers/productController');

router.post('/product/creat',productController.create_product);

router.get('/products',productController.products);

router.get('/products/:id', productController.products)

module.exports = router;
