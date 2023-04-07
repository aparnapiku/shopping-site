const express = require('express')

const router = express.Router();

const productController = require('../controllers/productController');

router.post('/product/creat',productController.create_product);

module.exports = router;
