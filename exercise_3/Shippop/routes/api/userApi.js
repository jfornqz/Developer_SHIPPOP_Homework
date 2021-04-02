const express = require('express');
const router = express.Router();



const userController = require("../../controllers/userController")


router.get('/', userController.getAllUser)
router.get('/:id', userController.getUserById)

router.post('/create', userController.upload.single('picture'), userController.createUser)

router.put('/:id/edit', userController.editUser)

router.delete('/:id/delete', userController.deleteById)




module.exports = router;