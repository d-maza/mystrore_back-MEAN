const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(    {
    "name" : String,
    "price" : Number,
    "description": String, 
    reg_time: {type: Date, default: Date.now}
}, {
    versionKey: false // Debe conocer el resultado después de establecer en falso
});
 
const Product = mongoose.model('product', productSchema)
module.exports = Product
