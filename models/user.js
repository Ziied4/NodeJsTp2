const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String, 
    email:{required:true,unique:true, type:string},
    age: Nnumber
});
module.exports = mongoose.model('User',userSchema)