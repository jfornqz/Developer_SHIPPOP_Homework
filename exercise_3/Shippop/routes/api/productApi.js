var express = require('express');
var router = express.Router();

var Product = require("../../models/productModel")

router.get('/', (req, res) => {

    try {
        Product.find().exec((err, data) => {

            if (err) {
                return res.status(500).send("Something wrong")
            }

            res.status(200).send(data)
        })
    } catch {
        console.log("Something")
    }

})
router.post('/adduser', (req, res) => {

})
module.exports = router;