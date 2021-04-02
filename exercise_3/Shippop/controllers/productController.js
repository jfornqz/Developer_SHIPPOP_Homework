const Product = require("../models/productModel")

//get all Product
exports.getAllProduct = async(req, res, next) => {
    try {
        let data = await Product.fine().exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
}

//Get Product by id
exports.getProductById = async(req, res, next) => {
    try {
        let data = await Product.fine({ _id: productId }).exec()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
}

//Create Product 
exports.createProduct = async(req, res, next) => {
    try {
        let data = new Product(req.body)
        await data.save(() => {
            res.status(200).json(data)
        })
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
}

//Edit Product
exports.editProduct = async(req, res, next) => {
    try {
        let data = await Product.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(200).send({ message: "Edit Success!" })
    } catch (err) {
        res.status(500).send({ message: "Error!" })
    }
}

// Delete Product with id
exports.deleteById = async(req, res, next) => {

    try {
        let data = await Product.findOneAndDelete({ _id: req.params.id })

        res.status(200).send({ message: "successfully" })
    } catch (err) {

        return res.status(500).send({ message: "Error" })
    }
}