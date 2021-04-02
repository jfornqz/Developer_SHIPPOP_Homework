const express = require('express');
const router = express.Router();

const productController = require('../../controllers/productController')

router.get('/', productController.getAllProduct)
router.get('/:id', productController.getProductById)

router.post('/create', productController.createProduct)

router.put('/:id/edit', productController.editProduct)

router.delete('/:id/delte', productController.deleteById)

module.exports = router;