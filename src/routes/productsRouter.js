const { Router } = require("express");
const router = Router();
const productosCtrl = require("../../src/controllers/productsController");

// Routes Products
router.get("/api/get_products", productosCtrl.get_products);
router.post("/api/add_product", productosCtrl.add_product);
router.delete("/api/delete_product/:id", productosCtrl.delete_product);
router.get("/api/get_product/:id" ,productosCtrl.get_product);
router.put("/api/edit_product/:id" ,productosCtrl.edit_product);

module.exports = router;
