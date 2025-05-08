const express = require("express");
const rutas = require("./routes");

//Instanciamos express
const app = express();

//Configuracion del servidor 
app.use("/",rutas);

//Puerto
const port = 3089;

//VR3
app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port}`)
});