function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        
    }
    
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div> Valor invalido: O Numero escolhido deve ser entre ${menorValor} e ${maiorValor}</div>`
        return
        
    }
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <div class = "acerto">Parabens, Você Acertou</div>
        <h2> O Numero secreto era ${numeroSecreto}</h2>
        <button class ='btn-jogar' id='jogar-novamente'>Reiniciar</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O Número secreto é MENOR <i class="fa-solid fa-arrow-down"></i></div>
        `
    }else  {
        elementoChute.innerHTML += `
        <div>O Número secreto é MAIOR <i class="fa-solid fa-arrow-up"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click',e =>{
if (e.target.id == 'jogar-novamente') {
    window.location.reload();
};




})
