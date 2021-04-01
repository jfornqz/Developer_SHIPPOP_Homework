//setting
var mongoose = require('mongoose');

//schema

var productScheme = mongoose.Schema({
    productName: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    author: { type: String, require: false },
    discount: { type: Number, require: false },
    date: { type: Date, require: false },
    status: { type: Boolean, require: true },
    score: { type: Number, require: false },
    type: { type: String, require: true },
    picture: { type: String, require: true },
    owner: { type: Object, require: true },
});

var products = mongoose.model('products', productScheme);

module.exports = products;