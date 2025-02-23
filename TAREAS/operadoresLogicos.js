//Tarea de Operadores Logicos 
//AND
console.log("Operador Logico AND - &&");
let and0 = false && false;
let and1 = false && true;
let and2 = true && false;
let and3 = true && true;

console.log("| 0 | 0 | = " + and0);
console.log("| 0 | 1 | = " + and1);
console.log("| 1 | 0 | = " + and2);
console.log("| 1 | 1 | = " + and3);

//OR
console.log("Operador Logico OR - ||");
let or0 = false || false;
let or1 = false || true;
let or2 = true || false;
let or3 = true || true;

console.log("| 0 | 0 | = " + or0);
console.log("| 0 | 1 | = " + or1);
console.log("| 1 | 0 | = " + or2);
console.log("| 1 | 1 | = " + or3);

//NOT
console.log("Operador Logico NOT - !");
let not0 = !false;
let not1 = !true;

console.log("| 0 | = " + not0);
console.log("| 1 | = " + not1);
