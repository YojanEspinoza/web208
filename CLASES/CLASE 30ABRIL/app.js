//Importar express
const express = require('express');

//Generar una instancia
const app = express();

//Definicion de puerto
const port = 5023;

app.get('/',(req,res)=>(
    res.send('Hola mundo desde el puerto 5023 (Opera).')
));

app.listen(port);