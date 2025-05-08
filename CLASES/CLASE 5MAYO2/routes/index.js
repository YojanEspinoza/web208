const express = require("express");
const router = express.Router();
const path = require("path");

//Definicion de las rutas multiples

router.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname,"../index.html"));
});

router.get("/registro",(req, res)=>{
    res.sendFile(path.join(__dirname,"../registro.html"));
});

router.get("/api",(req, res)=>{
    res.sendFile(path.join(__dirname,"../api.html"));
});

router.get("/calculadora",(req, res)=>{
    res.sendFile(path.join(__dirname,"../calculadora.html"));
});

router.get("/esquema",(req, res)=>{
    res.sendFile(path.join(__dirname,"../esquema.html"));
});

module.exports = router;