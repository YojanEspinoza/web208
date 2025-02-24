//SWITCH
let opcionUser = prompt(`
    Elija una opcion:
    1.- libro
    2.- pelicula
    3.- juego`
);

switch(opcionUser){
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("AoE");
        break;
    default:
        console.log("Opcion no valida");
        break;

}