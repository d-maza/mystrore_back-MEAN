const productModel = require ('../services/productsModel')

const productosCtrl = {};

productosCtrl.get_products = async (req, res, next) => {
  try {
    const products = await productModel.get_products();
    res.json(products);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

productosCtrl.delete_product = async (req, res) => {
  try {
    let product = await productModel.delete_product(req.params.id);
    res.json({
      mensaje: "🔥 Eliminado correctamente 🔥",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

productosCtrl.add_product = async (req, res) => {
  try {
    let product = await productModel.add_product(req.body);
    res.status(201).send(product);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

productosCtrl.get_product = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productModel.get_product({ _id: id });
    res.send(product);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

productosCtrl.edit_product = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    const product = await productModel.edit_product(id,body);
    res.status(201).json({
      mensaje: "Editado correctamente 👌🏼",
      data : product,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = productosCtrl;

