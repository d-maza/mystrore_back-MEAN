const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Middleware Connections
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect( process.env.MONGODB_URI,
  (err) => {
    if (!err) {
      console.log("🟢 La conexión MongoDB tuvo éxito.");
    } else {
      console.log("🔴 Error en la conexión DB: " + err);
    }
  }
);

app.get('/', (req, res) => {
    res.send('<h2 style="color:green">** Back End in service ** ✔ </h2>')
  })

app.use(require("./routes/index.router"));

app.use((req, res, next) => {
  res.status(404).send("Dirección no encotrada");
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Servidor escuchando en http://localhost:` + PORT);
});
