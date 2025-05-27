const express = require("express");
const router = express.Router();
const path = require("path");
const db = require('../bd/conexion');
const app = express();

//Definicion de las rutas multiples

//Ruta inicial
router.get("/views",(req, res)=>{
    res.sendFile(path.join(__dirname,"../index.ejs"));
});

//Ruta hacia edit
router.get("/views",(req, res)=>{
    res.sendFile(path.join(__dirname,"../edit.ejs"));
});

//Mostrar en lista 
router.get('/', (req,res)=>{
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
router.post('/add',(req,res)=>{
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
router.get('/edit/:id',(req,res)=>{
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
router.post('/update/:id',(req,res)=>{
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
router.get('/delete/:id',(req,res)=>{
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

module.exports = router;