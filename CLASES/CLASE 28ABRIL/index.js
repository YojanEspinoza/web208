//importar el modulo de http que viene incluido en node
const serverCreadoHTTP = require('http');

//Definimos el uerto donde va atener salida nuestro servidor

const puertoSalida = 3008;

//Crear servidor

const servidorCreado = serverCreadoHTTP.createServer((req, res)=>{
    //Establecer el encabezado de respuesta 

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hola mundo desde Node.js con el modulo http');
});

servidorCreado.listen(puertoSalida,()=>{
    console.log(`Servidor en escucha desde: http://127.0.0.1:${puertoSalida}`);
});