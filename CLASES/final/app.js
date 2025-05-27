const express = require("express");
const bodyParser = require("body-parser");
const rutas = require("./routes/router");
const db = require('./bd/conexion');
const app = express();

//Manejar epeticiones por medio de la URL 
app.use(bodyParser.urlencoded({extended:false}));

//Configuracion de plantillas 
app.set('view engine','ejs');

//Manejo de las rutas 
app.use("/",rutas);

//Iniciar el servidor
const port = 3005;
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
})
