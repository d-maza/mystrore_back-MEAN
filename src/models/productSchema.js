const {  Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports =  model("Product", productSchema);

