const mongoose = require('mongoose');

// Connection to the database with ORM Mongoose
const database = mongoose.connect(process.env.MONGODB_URI, (err) => {
    (!err) 
   ?  console.log("🟢 La conexión MongoDB tuvo éxito.")
   :  console.log("🔴 Error en la conexión DB: " + err);
 }
);

module.exports = database ;