'use strict';
// Import libraries 
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { join } = require("path");
const optionsWL = require('./src/Middleware/cors')
const database = require('./src/services/database')
const morgan = require('morgan'); //Pependencia Desarollo

// Middleware
app.use(cors(optionsWL));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))

// Static files
app.use(express.static(join(__dirname, "public"))); 

// Routes
app.use(require("./src/routes/productsRouter"));

// 404 not found
app.use((req, res, next) => {
  res.status(404).send("Ops!! Dirección no encotrada");
});

// Start server 
let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`🌐 Servidor escuchando en http://localhost:` + port);
});

// console.log(require('crypto').randomBytes(64).toString('hex')); 

