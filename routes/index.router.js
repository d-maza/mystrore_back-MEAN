const { Router } = require('express');
const router = Router(); 
const Product = require('../models/product') 


// Get all products
router.get('/api/get_products', async(req, res) => {
    try {
        const arrayProductos = await Product.find()
        res.send(arrayProductos);
        console.log(arrayProductos);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Create a new product
router.post('/api/add_product', async (req, res) => {
    try {
        let product = new Product(req.body)
        product = await product.save()
        res.send(product);
    } catch (error) {
        res.status(500).send(error.message)
    }
})


// Delete product By ID
router.delete('/api/delete_product/:id', async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.send(product)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router

