//Inicializamos un arreglo para almacenar unas tareas
let tareas = [];

function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles: \n" + 
        "1. Agregar tareas: \n" +
        "2. Ver todas las tareas \n" +
        "3. Marcar tarea como completada. \n" + 
        "4. Salir. \n" + 
        "Elige una opcion." 
    ));
}

//Funcion para agregar una tarea
function agregarTarea(){
    let nombre = prompt("Introduce el nombre de la tarea")
    if(nombre){
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("¡Tarea agregada exitosamente!");
    }else{
        alert("El nombre de la tarea no puede estar vacío");
    }
}

//Funcion para ver todas las tareas
function verTareas(){
    if(tareas.length === 0){
        alert("No tenemos tareas en la lista");
    }else{
        let mensaje = "Lista de tareas\n";
        alert(mensaje + "\n" + tareas)
    }
}

//Funcion para marcar una tarea como completada
function marcarTareaCompletada(){
    let numero = parseInt( prompt("Introduce el numero de la tarea que deseas marcar como completada"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero-1].completada = true;
        alert (`La tarea "${tareas[numero-1].nombre}" ha sido marcada como completada`);
    }else{
        alert("Numero de tarea inválido.")
    }
}


//Funcion principal para manejra un flujo de el programa
function iniciarPrograma(){
    let continuar = true;
        while(continuar){
                let opcion = mostrarMenu();
            switch(opcion){
                case 1:
                    agregarTarea();
                    break;
                case 2:
                    verTareas();
                    break;
                case 3:
                    marcarTareaCompletada();
                    break;
                case 4:
                    alert("Saliendo del programa");
                    continuar = false;
                    break;
                default:
                    alert("Opcion no válida, intenta de nuevo.");
            }
        }
    alert("Programa finalizado.");
}

//Iniciar programa
iniciarPrograma();