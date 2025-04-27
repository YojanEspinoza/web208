function redirect(){
    let var1 = document.getElementById('input1').value.trim();
    let var2 = document.getElementById('input2').value.trim();
    let var3 = document.getElementById('input3').value.trim();

    var msj = "Hola soy " + var1 + ", mi asunto es sobre " + var2 + ": " + var3;

    location.href="https://api.whatsapp.com/send?phone="+5572148646+"&text="+encodeURIComponent(msj);
}