//Otra forma de insercion de datos TypeOf, transforma el dato ingresado a string
let numero1 = prompt("Ingresa un numero1: ");
let numero2 = prompt("Ingresa un numero2: ");

console.log(typeof numero1);

//Para el caso anterior podemos transformar el tipo de dato de entrada de String a tipo Entero
let resultado1 = parseInt(numero1) + parseInt(numero2);
console.log("El resultado de la suma es : " + resultado1);

let resultado2 = parseInt(numero1) - parseInt(numero2);
console.log("El resultado de la resta es : " + resultado2);

let resultado3 = parseInt(numero1) / parseInt(numero2);
console.log("El resultado de la division es : " + resultado3);

let resultado4 = parseInt(numero1) * parseInt(numero2);
console.log("El resultado de la multiplicacion es : " + resultado4);
