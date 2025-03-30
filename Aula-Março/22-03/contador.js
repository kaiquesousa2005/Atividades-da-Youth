let numero = 0
let multiplicador = 1
let adicionarAutomaticamente = 0
let custo1 = 20

function clicar() {
    numero += 1 * multiplicador;
    atualizarPontuacao();
}

function atualizarPontuacao () {
     document.getElementById('contador').innerText = "Pontos: " + Math.floor(numero)
}

function comprarUpgrade(tipo){
    if (tipo === 1 && numero >= custo1){
        numero -= custo1;
        adicionarAutomaticamente += 0.2;
        custo1 += 0.2 * custo1
    } 
    atualizarPontuacao();
}
document.querySelector("#custo1").innerText = 'Custo : ' + custo1 + ' pontos';

setInterval(() => {
    numero += adicionarAutomaticamente;
    atualizarPontuacao();
}, 1000)
