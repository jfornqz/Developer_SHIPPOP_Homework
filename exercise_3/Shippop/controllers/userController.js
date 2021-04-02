const User = require("../models/userModel")

// Get all user
exports.getAllUser = async(req, res, next) => {
    try {
        let data = User.find().exec()
        res.status(200).json(data)

    } catch (err) {
        return res.status(500).send({ message: "Error!" })
    }

}

// Get user by id 
exports.getUserById = async(req, res, next) => {
    try {
        const userId = req.params.id
        let data = await User.find({ _id: UserID }).exec()

        res.status(200).json(data)
    } catch (err) {
        return res.status(500).send({ message: "Error!" })
    }
}

// Create User
exports.createUser = async(req, res, next) => {
    try {
        let data = new User(req.body)
        await data.save(() => {
            res.send({ message: "Create Success!" })
        })

    } catch (err) {
        return res.status(500).send({ message: "Error!" })
    }
}

// Edit User
exports.editUser = async(req, res, next) => {
    try {
        let data = await User.findByIdAndUpdate({ _id: req.params.id }, req.body)

        res.status(200).send({ message: "Edit success!", data: data })

    } catch (err) {
        return res.status(500).send({ message: "Error!" })
    }
}

// Delete User by id
exports.deleteById = async(req, res, next) => {
    try {
        let data = await User.findOneAndDelete({ _id: req.params.id })

        res.status(200).send({ message: "Delete Success!", data: data })

    } catch (err) {
        return res.status(500).send({ message: "Error!" })
    }
}