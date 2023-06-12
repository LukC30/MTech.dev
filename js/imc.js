function imc(){
    a = (document.getElementById("caixa-altura").value);
    p = (document.getElementById("caixa-peso").value);
    resul = document.getElementById("resul");
    resulImc = document.getElementById("resul-imc");
    divi = p/(a^2);
    if((divi) <= 18.5){
        resul.textContent = "MAGREZA"
        resulImc.textContent = `IMC MENOR 18,5 --> MARGREZA`
    } 
    else if ((divi) >= 18.5 && (divi) <= 24.99) {
        resul.textContent = "NORMAL"
        resulImc.textContent = `IMC DE 18,5 ATÉ 24,99 --> NORMAL`
    }
    else if ((divi) >= 25 && (divi) <= 29.99) {
        resul.textContent = "SOBREPESO"
        resulImc.textContent = `IMC DE 25 ATÉ 29,99 --> SOBREPESO`
    }
    else if ((divi) >= 30 && (divi) <= 34.99) {
        resul.textContent = "OBESIDADE 1"
        resulImc.textContent = `IMC DE 30 ATÉ 34,99 --> OBSIDADE 1`
    }
    else if ((divi) >= 35 && (divi) <= 39.99) {
        resul.textContent = "OBESIDADE 2"
        resulImc.textContent = `IMC DE 35 ATÉ 39,99 --> OBSIDADE 2`
    }
    else{
        resul.textContent = "OBESIDADE 3"
        resulImc.textContent = `IMC ACIMA 39,99 --> OBSIDADE 3`
    }
}

function inputNumero(evento){

    var caracter = String.fromCharCode(evento.which);
    if(!(/[0-9.]/.test(caracter))){
            evento.preventDefault();
    }


}