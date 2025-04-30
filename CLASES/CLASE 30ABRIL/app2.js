//Importar express
const express = require('express');

//Generar una instancia
const app = express();

//Definicion de puerto
const port = 3008;

app.get('/',(req,res)=>(
    res.send('Hola mundo desde el puerto 3008 (Edge).')
));

app.listen(port);