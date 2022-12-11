// Import libraries ()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connection to the database with ORM Mongoose
mongoose.connect(process.env.MONGODB_URI,(err) => {
     (!err) ?
      console.log("🟢 La conexión MongoDB tuvo éxito."):
      console.log("🔴 Error en la conexión DB: " + err);
  }
);

// Get starting in browser
app.get('/', (req, res) => {
    res.send('<h2 style="color:peru">** Back End in service  🐙 **</h2>')
})
  
// Routes
app.use(require("./routes/index.router"));

// 404 not found
app.use((req, res, next) => {
  res.status(404).send("Dirección no encotrada");
});

// Start server 
let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`🌐 Servidor escuchando en http://localhost:` + port);
});



