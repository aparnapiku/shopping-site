const User = require('../models/user');

exports.create_user = async (req, res) => {
 try{
    const {firstName,lastName,phone, imgUrl } = req.body;

    let newUser = new User({
      firstName,
      lastName,
      phone,
      imgUrl, 
       });
   
      newUser = await newUser.save();
 
      res.status(201).json(newUser);
  
 } catch(e){
    res.status(500).json({ error: e.message });
 }
}; 


exports.users = async (req, res) => {
   try {
    const users =  await User.find({});
   
   res.json(users);
   } catch(e) {
      res.status(500).json({ error: e.message }); 
   }
};

exports.user = async (req,res) => {
   try{
      const id = req.params.id;
      console.log(id);
      const user = await User.findById(id);
      res.json(user)
   } catch (e) {
      res.status(500).json({error: e.message})
   }
};