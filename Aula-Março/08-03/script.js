// function fatorial (qtd) {

// }

// let resultado = 1

// for(let i = 4; i > 0; i--){
//     resultado *= i
// }

// console.log(resultado)

// let onibus = {
//     rodas: 8,
//     limite_passageiros: 40,
//     portas: 2,
//     exibir_mensagem: function () {
//         console.log(`Olá, essas são as caracteristicas do onibus ${this.rodas} rodas, ${this.limite_passageiros} passageiros, ${this.portas} portas`);
//     }
// }

// onibus.exibir_mensagem();

// onibus.janela = 20
// delete onibus.rodas

// onibus.exibir_mensagem = function (){
//     console.log(`Agora foi adicionado a quantidade de ${this.janela} janelas como caracteristica e removido as quantidade de rodas`);
// }

// onibus.exibir_mensagem()

// onibus.exibir_mensagem = function () {
//     console.log(`Olá, essas são as caracteristicas do onibus ${this.janela} janelas, ${this.limite_passageiros} passageiros, ${this.portas} portas`);
// }

// console.log(onibus.janela);
// onibus.exibir_mensagem()

let produto = {
    nome: "Energetico Monster",
    preço: 12.90,
    estoque: 3,
    disponivel: true,
    alterar_disponibilidade: function () {
        if (this.estoque > 0) {
            this.disponivel = true
        } else {
            this.disponivel = false
        }
    },
    retirar: function () {
        if (this.disponivel) {
            this.estoque -= 1
            this.alterar_disponibilidade()
        } else {
            console.log('Não há estoque');
        }
    }
}

console.log(produto);
produto.retirar()



console.log(produto);






