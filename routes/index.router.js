const { Router } = require("express");
const router = Router();
const Product = require("../models/product");
const productosCtrl = require("../controllers/products.comtroller");
const { get_products, add_product, delete_product, } = require("../controllers/products.comtroller");

// Rutas Productos
router.get("/api/get_products", get_products);
router.post("/api/add_product", add_product);
router.delete("/api/delete_product/:id", delete_product);

module.exports = router;
