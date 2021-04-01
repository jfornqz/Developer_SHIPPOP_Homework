//setting
const mongoose = require('mongoose');

//schema

const cartScheme = mongoose.Schema({
    product: { type: String, require: true },
    amount: { type: Number, require: true },
    price: { type: Number, require: true },

});

const Cart = mongoose.model('carts', cartScheme);

module.exports = Cart;