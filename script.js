function verificar() {    

    let palavra = document.getElementById("inputPalavra").value;
    
    palavra = palavra.toLowerCase();
    
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let resultVogal = "";
    let resultConso = "";    
     
    for (i = 0; i < palavra.length; i++ ) {
        if(vogais.indexOf(palavra[i]) != -1) {
            resultVogal++;
        } else {
            resultConso++;
        }
    }    

    rVogais.innerHTML = resultVogal;
    consoantes.innerHTML = resultConso;

}