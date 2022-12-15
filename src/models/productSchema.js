const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    reg_time: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
