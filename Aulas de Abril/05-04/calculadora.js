
function adicionar(valor){
    let visor = document.getElementById('visor')

    visor.value += valor
}

function calcular(){
    document.getElementById('visor').value = eval(document.getElementById('visor').value)
}

function reset() {
    document.getElementById('visor').value = ''
}
