function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max, min)+min)
}
console.log(numeroAleatorio(1,11));

//Funcion expresada
//Anonima (expresada en una variable)
const miNumero = function(min, max){
    return Math.floor(Math.random()*(max,min)+min);
}
console.log(miNumero(11,32));

const miNumeroFlecha = (max) => {
    return Math.floor(Math.random()*(max-1)+1);
}
console.log(miNumeroFlecha(89));

