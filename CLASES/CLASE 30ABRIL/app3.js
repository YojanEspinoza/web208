//Importar express
const express = require('express');

//Generar una instancia
const app = express();

//Definicion de puerto
const port = 2006;

app.get('/',(req,res)=>(
    res.send('Hola mundo desde el puerto 2006 (FireFox)')
));

app.listen(port);