const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{type: String, required: true, trim: true},
    lastName:{type: String, required: true, trim: true},
    phone:{type: Number, require: true},
    imgUrl:{type: String, required: true},
});

 const User= mongoose.model('User', userSchema);

 module.exports = User;