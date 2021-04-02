//setting
const mongoose = require('mongoose');

//schema
const cartScheme = mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "products", require: true },
    amount: { type: Number, require: true },
    price: { type: Number, require: true },

}, {versionKey: false});

const Cart = mongoose.model('carts', cartScheme);

module.exports = Cart;