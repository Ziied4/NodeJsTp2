const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    title:String,
    description:String,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
})

module.exports = mongoose.model('post',userSchema)