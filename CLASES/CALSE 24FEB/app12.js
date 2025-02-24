//FUNCIONES
/*
function name(argumentos ){

}

//Las funciones son las primeras que se cargan 
function saludar(){
    alert("Hola mundo");
}
saludar();
*/

function saludar(nombre){
    return "Mi nombre es: " + nombre;
}
console.log(saludar("Yojan"));

//SUMA
function suma(n1,n2){
    return parseInt(n1) + parseInt(n2);
}
let numero1 = prompt("Ingresa un primer numero: ");
let numero2 = prompt("Ingresa un segundo numero: ");

let resultado = suma(numero1, numero2);

console.log("El total de la suma es: " + resultado);

//RESTA
function resta(r1,r2){
    return parseInt(r1) - parseInt(r2);
}
let num1 = prompt("Ingresa un primer numero: ");
let num2 = prompt("Ingresa un segundo numero: ");

let res = resta(num1, num2);

console.log("El total de la resta es: " + res);

//MULTIPLIPCACION
function multi(m1,m2){
    return parseInt(m1) * parseInt(m2);
}
let mul1 = prompt("Ingresa un primer numero: ");
let mul2 = prompt("Ingresa un segundo numero: ");

let prod = multi(mul1, mul2);

console.log("El total de la resta es: " + prod);

//DIVISION
function divi(d1, d2){
    return parseInt(d1) / parseInt(d2);
}
let div1 = prompt("Ingresa un primer numero: ");
let div2 = prompt("Ingresa un segundo numero: ");

let div = divi(div1, div2);

console.log("El total de la resta es: " + div);