const mongoose = require('mongoose')
const {Schema} = mongoose

const ProductSchema = new Schema({
name:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
price:{
    type:String,
    required:true
},
catagory:{
    type:String,
},
img:{
    type:String,
},
slug:{
    type:String,
    required:true
}
})

module.exports = mongoose.model('products',ProductSchema)