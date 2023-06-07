const Product = require('../models/product');

exports.create_product = async (req, res) => {
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
   }
   catch(e){
    res.status(500).json({ error: e.message });
 }
}; 


exports.products = async (req, res) => {
   try {
    const products =  await Product.find({});
   
   res.json(products);
   } catch(e) {
      res.status(500).json({ error: e.message }); 
   }
};

exports.product = async (req,res) => {
   try{
      const id = req.params.id;

      const product = await Product.findById(id);
      res.json(product)
   } catch (e) {
      res.status(500).json({error: e.message})
   }
};

exports.update_product = async (req, res) => {
   try{

      const {title, description,price, imgUrl } = req.body;

      let updatedProduct = new Product({
       title,
       description,
       price,
       imgUrl, 
       _id: req.params.id,
        });

      await Product.findByIdAndUpdate(req.params.id, updatedProduct)
        }catch(e){
         res.status(500).json({error: e.message})
   }
}



