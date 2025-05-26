const express = require("express");
const mhysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

//Manejar epeticiones por medio de la URL 
app.use(bodyParser.urlencoded({extended:false}));


//Configuracion de plantillas 

app.set('view engine','ejs');

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

//Iniciar el servidor
const port = 3005;
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
})

//Mostrar en lista 
app.get('/', (req,res)=>{
    //Consulta a la Base de Datos 
    const consulta = 'SELECT * FROM users';

    //Usamos la DB para conectarnos a la base de datos 
    db.query(consulta, (err,results)=>{
        if(err){
            console.error("No se encontró el usuario.", err);
            res.send("Error: Comunicate con soporte.");
        }else{
            res.render('index',{users: results});
        }
    });
});

//Agregar usuario
app.post('/add',(req,res)=>{
    const {name, email} = req.body;
    const insertarRegistroUsuario = 'INSERT INTO users (name,email) VALUES (?,?)';

    db.query(insertarRegistroUsuario,[name,email],(err)=>{
        if(err){
            console.log("No se insertó el registro", err);
        }else{
            res.redirect('/');
        }
    });
});

//Editar usuario
app.get('/edit/:id',(req,res)=>{
    const {id} =req.params;
    const editar = 'SELECT *  FROM users WHERE id = ?';
    db.query(editar,[id],(err,results)=>{
        if(err){
            console.error("Error",err);
        }else{
            res.render('edit',{user: results[0]});
        }
    });

//Actualizar usuario
app.post('/update/:id',(req,res)=>{
    const {id} = req.params;
    const {name,email} = req.body;
    const actualizarUser = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(actualizarUser,[name,email,id],(err)=>{
        if(err){
            console.error("Sin actualizar usuario", err);
            res.send("Error al intentar actualizar el usuario.");
        }else{
            res.redirect('/');
        }
    });
});

//Eliminar usuario
app.get('/delete/:id',(req,res)=>{
    const {id} = req.params;
    const eliminar = 'DELETE FROM users WHERE id = ?';
    db.query(eliminar,[id],(err)=>{
        if(err){
            console.error('Error en delete', res);
            res.send("Error al eliminar usuario");
        }else{
            res.redirect('/');
        }
    });
});

});