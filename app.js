import express from 'express';  // Sevidor
const app = express();

import mongoose from 'mongoose'; // ORM mapeo objeto-relacional
import cors from 'cors';  // Uso compartido de recursos entre orígenes - Cross-Origin Resource Sharing
import dotenv from 'dotenv'; 
import path from 'node:path';  // Rutas relativas (Linux, Wndows, Mac)

// Middleware Connections
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs"); // Renderizado ejs

  
// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/pruebas', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  family: 4,
}, (err) => {
    if (!err) {
        console.log('🟢 La conexión MongoDB tuvo éxito.')   
    } else {
        console.log('🔴 Error en la conexión DB: ' + err)
    }
});
  

  


// Static files (Web)
//   app.use(express.static(path.join(__dirname, "../public")));
  
// Routes
//   app.use(require("./routes/index.routes"));
  

  //  404 
  app.use((req, res, next) => {
    res.status(404).send("Dirección no encotrada");
  });


let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🌐 Servidor escuchando en http://localhost:`+PORT);
});
  
