const mhysql = require("mysql2");

//Conexion a la base de datos 

const db = mhysql.createConnection({
    host:'localhost', //Server
    user:'root', //user
    password:'1234', //pass
    database:'node_crud', //Nombre de la BD
    port:3306 //port
});

//Validacion de la conexion a la BD
db.connect(err => {
    if(err){
        console.log('Sin concexion a la BD', err)
    }else{
        console.log('BD conectada')
    }
});

module.exports = db;