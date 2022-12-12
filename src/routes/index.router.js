const { Router } = require("express");
const router = Router();
const {get_products,add_product, delete_product, get_product, edit_product,} = require("../../src/controllers/products.comtroller");

// Routes Productos - App-Jordi
router.get("/api/get_products", get_products);
router.post("/api/add_product", add_product);
router.delete("/api/delete_product/:id", delete_product);

// Routes added
router.get("/api/get_product/:id", get_product);
router.put("/api/edit_product/:id", edit_product);

module.exports = router;
