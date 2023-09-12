// models/User.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  username:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
 
  products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
    },
});

module.exports = mongoose.model('Cart', cartSchema);
