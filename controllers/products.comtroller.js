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
    let product = await Product.findByIdAndDelete(req.params.id);
    res.json({
      estado: true,
      mensaje: "Eliminado",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

productosCtrl.get_product =async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOne({ _id: id });
    res.send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

productosCtrl.edit_product = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const product = await Product.findByIdAndUpdate(id, body, { useFindAndModify: false })
    res.json({
      estado: true,
      mensaje: "Editado",
    });
  
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = productosCtrl;
