let inventario = [];

//Funcion para menu
function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles: \n" + 
        "1. Agregar producto \n" + 
        "2. Mostrar productos \n" + 
        "3. Buscar un producto \n" +
        "4. Salir \n" +
        "Elija una opción"
    ));
}

function agregarProducto(){
    let nombre = prompt("Introduce el nombre del producto: ");
    let cantidad = parseInt(prompt("Introduce la cantidad del producto: "));
    let precio = parseInt(prompt("Introduce el precio del producto: "));

    if(cantidad > 0 && precio > 0){
        let producto ={
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(producto);
        alert("Producto agregado.");
    }else{
        alert("La cantidad y precio debe ser numeros positivos");
    }
}

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    }
    alert("Programa finalizado.");
}

function mostrarProducto(){
    if (inventario.length === 0){
        alert("No hay productos en el inventario.");
    }else{
        let mensaje = "Productos en inventario: \n";
        for(let i = 0 ; i < inventario.length; i++){
            mensaje += `Producto ${ i + 1 } \n` +
                       `Nombre: ${inventario[i].nombre} \n` +
                       `Cantidad: ${inventario[i].cantidad} \n` +
                       `Precio: ${inventario[i].precio} \n` +
                       "--------------------------------------- \n"
                       ;
        }
        alert(mensaje);
    }
    
}

function buscarProducto(){
    let buscar = parseInt(prompt("Introduce el numero del producto que deseas buscar: "));
    if(buscar > 0 && buscar <= inventario.length){
        alert(`Producto ${buscar}\n` +
               `Nombre: ${inventario[buscar-1].nombre}\n` +
               `Cantidad: ${inventario[buscar-1].cantidad}\n` +
               `Precio: ${inventario[buscar-1].precio}\n`)
    }else{
        alert("El numero de producto no es válido ya que no ha sido agregado.")
    }

}

iniciarPrograma();