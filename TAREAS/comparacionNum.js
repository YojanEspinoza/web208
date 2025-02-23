// TAREA Comparacion de dos numeros

let dato1 = parseInt(prompt("Ingresa un numero: "));
let dato2 = parseInt(prompt("Ingresa otro numero: "));

if (dato1 > dato2){
    console.log("El numero " + dato1 + " es mayor que " + dato2);
}else if(dato2 > dato1){
    console.log("El numero " + dato2 + " es mayor que " + dato1);
}else if(dato1 == dato2){
    console.log("Los numeros son iguales");
}
