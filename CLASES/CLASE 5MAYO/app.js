//Importacion de express
const express = require('express');
const path = require('path');
//Instanciar express
const app = express();

//Puerto 
const port = 3008;
app.get("/",(req, res)=>{
    //res.send("Hola mundo");
    //VR1
    //res.sendFile("c:/Users/pachi/Desktop/WEB2/web208/CLASES/CLASE 5MAYO/index.html");

    //VR2
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});