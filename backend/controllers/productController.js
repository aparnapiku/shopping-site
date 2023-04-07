const Product = require('../models/product');

exports.create_product = async   (req, res) => {
 try{
    const {title, description,price, imgUrl } = req.body;
   
    let newProduct = new Product({
     title,
     description,
     price,
     imgUrl, 
      });
  
     newProduct = await newProduct.save();

     res.status(201).json(newProduct)
  
 } catch(e){
    res.status(500).json({ error: e.message });
 }
}; 
