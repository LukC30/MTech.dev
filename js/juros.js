function juros(){
    v = (document.getElementById("caixa-valor").value);
    p = (document.getElementById("caixa-parcela").value);
    t = (document.getElementById("caixa-taxa").value);
    resul = document.getElementById("resul");
    divi = (v*(1+(1.8/100))^p*(1+t)^p);

        resul.textContent = `${divi}`
 

}



function inputNumero(evento){

    var caracter = String.fromCharCode(evento.which);
    if(!(/[0-9.]/.test(caracter))){
            evento.preventDefault();
    }


}