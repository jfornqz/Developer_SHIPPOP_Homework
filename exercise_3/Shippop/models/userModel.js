//setting
const mongoose = require('mongoose');

//schema

const userScheme = mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    name: { type: String, require: true },
    gender: { type: String, require: false },
    DOB: { type: Date, require: false },
    picture: { type: String, require: false },
    tel: { type: String, require: false },
}, { versionKey: false });

const User = mongoose.model('users', userScheme);

module.exports = User;