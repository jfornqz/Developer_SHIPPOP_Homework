//setting
var mongoose = require('mongoose');

//schema

var cartScheme = mongoose.Schema({
    product: { type: String, require: true },
    amount: { type: Number, require: true },
    // name: { type: String, require: true },
    // gender: { type: String, require: false },
    // age: { type: Number, require: false },
    // DOB: { type: Date, require: false },
    // picture: { type: String, require: false },
    // tel: { type: String, require: false },
    // shopName: { type: String, require: false },
});

var Cart = mongoose.model('carts', cartScheme);

module.exports = Cart;