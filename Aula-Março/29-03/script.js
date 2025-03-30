let soma = 0

function calcular (){
    let altura = document.querySelector('#altura').value

    let peso = document.querySelector('#peso').value

    let resultado = document.querySelector('#resultado')

    let imc = document.querySelector('#imc').value

    soma = peso / (altura * altura)
    

    if (soma <= 18.5) {
        resultado.innerHTML = "Voce está abaixo da faixa de IMC esperado"
    }
    else if(soma <= 24.9) {
        resultado.innerHTML = "Voce está na faixa de IMC esperado"
    }
    else if (soma < 29.9) {
        resultado.innerHTML = "Voce está na faixa de IMC classificado como sobrepeso"
    }
    else if (soma < 39.9) {
        resultado.innerHTML = "Voce está na faixa de IMC classificado como obesidade"
    }
    else if (soma > 39.9) {
        resultado.innerHTML = "Voce está na faixa de IMC classificado como obesidade morbida ☠️☠️☠️"
    }
}