

function divisao(){
    g = (document.getElementById("caixa-gasolina").value);
    e = (document.getElementById("caixa-etanol").value);
    inv = document.getElementById("inv");
    divi = e / g;
    if(divi <= 0.74){
        
        inv.textContent = (`use etanol, a conta deu: ${divi}`)
    } 
    else if (divi > 0) {
        
        inv.textContent = `use gasosa, a conta deu: ${divi}`
    }
}

function inputNumero(evento){

    var caracter = String.fromCharCode(evento.which);
    if(!(/[0-9.]/.test(caracter))){
            evento.preventDefault();
    }


}