//Funcion tradicional 
function datos(a){
    return a+100;
}

function (a){
    return a + 100;
}

var numero = (a)=>{
    return a + 100;
}

var numero = (a) => a + 100;

var numero = a => a + 100;

//Pasar a una funcion flecha
function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max, min)+min)
}
console.log(numeroAleatorio(1,11));

const NumeroFlecha = (max, min) => Math.floor(Math.random()*(max-min))