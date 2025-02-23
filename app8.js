//** 
//ESTRUTURAS DE CONTROL
//if(condition){
//    ejecuta algo
//}
//fin del programa

//if(condition){
//    ejecuta si la condicion es true
//}else{
//    ejecuta algo si la condicion es false
//}

let palabra = prompt("Ingresa el dombre de tu escuela");
if(palabra == "UNAM"){
    console.log("Palabra correcta")
}else{
    console.log("Palabra incorrecta")
}

let numero = prompt("Ingresa un numero: ");
if(numero==10){
    console.log("Bien");
    console.log(typeof numero);
}

let dato = parseInt(prompt("Ingresa un dato: "));
if(numero===10){
    console.log("Bien");
}else{
    console.log("No se puede por que es: " + typeof dato);
}