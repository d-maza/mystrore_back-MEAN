const Product = require("../models/product");

const productosCtrl = {};

productosCtrl.get_products = async (req, res) => {
  try {
    const arrayProductos = await Product.find();
    res.send(arrayProductos);
    // console.log(arrayProductos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
productosCtrl.add_product = async (req, res) => {
  try {
    let product = new Product(req.body);
    product = await product.save();
    res.send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
productosCtrl.delete_product = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = productosCtrl;
