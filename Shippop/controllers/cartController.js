const Cart = require("../models/cartModel")

exports.getCurrentProduct = async(req, res, next) => {
    
    try{
        let data = await Cart.find().exec()

        res.status(200).json(data)
    }
    catch(err){
        return res.status(500).send({ message: "Error"})
    }
    

}

exports.addProductToCart = async (req, res, next) => {

    try{
        let data = new Cart(req.body)

        await data.save()

        res.send({message: "Successfully"})

    }
    catch(err){
        return res.status(500).send({ message: "Error"})
    }
}

exports.deleteCartItemById = async(req, res, next) => {

    try {
        let data = await Cart.findOneAndDelete({ _id: req.params.id })

        res.status(200).send({ message: "successfully" })
    } catch (err) {

        return res.status(500).send({ message: "Error" })
    }
}
