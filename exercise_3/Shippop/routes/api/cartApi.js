var express = require('express');
var router = express.Router();

var Cart = require("../../models/cartModel")

router.get('/', (req, res) => {

    try {
        Cart.find().exec((err, data) => {

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