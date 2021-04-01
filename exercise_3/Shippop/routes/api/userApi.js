var express = require('express');
var router = express.Router();

var User = require("../../models/userModel")

router.get('/', (req, res) => {
    // res.send('hello World')
    try {
        User.find().exec((err, data) => {

            if (err) {

                return res.status(500).send("Something wrong")
            }

            res.status(200).send(data)
        })
    } catch {
        console.log("Something")
    }



})
module.exports = router;