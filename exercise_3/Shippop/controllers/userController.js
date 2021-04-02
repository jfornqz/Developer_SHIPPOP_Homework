const User = require("../models/userModel")
const mongoose = require('mongoose')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:|\./g,'') + ' - ' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(null, false)
    }

}

exports.upload = multer({storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})


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
        let data = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            gender: req.body.gender,
            DOB: req.body.DOB,
            picture: req.file.path,
            tel: req.body.tel
        })

        console.log(res)
        await data.save((err, data) => {

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