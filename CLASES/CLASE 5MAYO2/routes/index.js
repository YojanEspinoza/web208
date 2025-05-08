const express = require("express");
const router = express.Router();
const path = require("path");

//Definicion de las rutas multiples
//Ruta inicial
router.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname,"../index.html"));
});
//Ruta hacia un Formulario
router.get("/registro",(req, res)=>{
    res.sendFile(path.join(__dirname,"../registro.html"));
});
//Ruta hacia el formulario de la API
router.get("/api",(req, res)=>{
    res.sendFile(path.join(__dirname,"../api.html"));
});
//Ruta hacia una calculadora
router.get("/calculadora",(req, res)=>{
    res.sendFile(path.join(__dirname,"../calculadora.html"));
});
//Ruta hacia un esquema elaborado con DIVS
router.get("/esquema",(req, res)=>{
    res.sendFile(path.join(__dirname,"../esquema.html"));
});

module.exports = router;