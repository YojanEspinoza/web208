//ARREGLOS
let frutas = ["manzana", "pera", "palta", "mango"];
console.log(frutas);

//ATRIBUTOS INDIVIDUALES
/* 
console.log(frutas.length);

console.log(frutas [2]);
console.log(frutas [15]); //indefinido
*/

for(let i = 0; i < frutas.length; i++){
    console.log("Fruta " + (i+1) + ": " + frutas[i]);
}
//cada elemento del ojeto 
for (const fruta of frutas) {
    console.log(fruta);
}
//iteraciones de las propiedas del objeto 
for (const fruta in frutas) {
    console.log(fruta);
}

for (let j = 0; j <= 10; j++){
    console.log("3 * " + j + " = " + (3*j));
}

