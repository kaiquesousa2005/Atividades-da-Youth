// let idade = Number(prompt("Digite sua idade: "))

// if(idade >= 18){
//     alert('Já pode ser preso!!')
// } else if(idade < 18){
//     alert('Vai estudar!!')
// }else if(idade < 0) {
//     alert('Idade Inválida!!')
// } else {
//     alert('Digite uma idade')
// }

// let cargo = prompt('')

// switch(cargo){
//     case 'Professor':
//         console.log('Dando aula*****');
//         break;

//     case 'Aluno':
//         console.log('Assistindo a aula****');
//         break;

//     default:
//         console.log('Saia da aula');

// }

// let numero = Number(prompt("Digite um numero"));
// let numero1 = Number(prompt("Digite outro"));

// if (numero > numero1) {
//   alert("O primeiro numero é maior");
// } else if (numero < numero1) {
//   alert("O segundo numero é maior");
// } else if (numero == numero1) {
//   alert("Eles são igual");
// } else {
//   alert("Numero invalido");
// }

// let A = Number(prompt("Digite o valor A"));
// let B = Number(prompt("Digite o valor B"));
// let C = Number(prompt("Digite o valor C"));

// if (A + B > C) {
//   alert("A + B é maior que C");
// } else if (A + B < C) {
//   alert("A + B é menor que C");
// } else if (A + B == C) {
//   alert("A + B é igual o valor C");
// } else "Numero invalido";

// let numero = Number(prompt("Digite um numero"));
// let resto = numero % 2;

// if (resto == 0) {
//   alert(numero + " Esse numero é par");
// } else {
//   alert(numero + " O numero é impar");
// }

// let A = Number(prompt("Digite o valor A"));
// let B = Number(prompt("Digite o valor B"));

// if (A == B) {
//   alert("A e B são iguais, então a soma deles é " + (A + B));
// } else {
//   alert("A e B são diferentes, então a multiplicação deles é " + A * B);
// }

// let numero = Number(prompt("Digite um numero"));
// let resto = numero % 2;

// if (resto == 0) {
//   alert("numero par " + (numero += 5));
// } else {
//   alert("numero impar " + (numero += 8));
// }

let peso = Number(prompt("Digite o seu peso"));
let altura = Number(prompt("Digite sua altura utilizando o . ao inves da ,"));
imc = peso / altura ** 2;
alert(imc);

if(imc<18.5){
    alert('Abaixo do peso')
} else if(imc<25){
    alert('Peso normal')
} else if(imc<30){
    alert('Acima do Peso')
} else {
    alert('Obeso')
}
