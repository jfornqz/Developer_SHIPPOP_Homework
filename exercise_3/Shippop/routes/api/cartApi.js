const express = require('express');
const router = express.Router();

const cartController = require("../../controllers/cartController")

router.get('/', cartController.getCurrentProduct)

router.post('/add', cartController.addProductToCart)

router.delete('/:id/delete', cartController.deleteCartItemById)

module.exports = router;