
// let lista = [12, 0, 4, 99, 43, 1, 6, 3, 11]

// console.log(lista);

// for(let i = 0; i<lista.length; i++){
//     for(let j = 0; j<lista.length-1; j++){
//         if(lista[j] > lista[j+1]){
//             let aux = lista[j+1]
//             lista[j+1] = lista[j]
//             lista[j] = aux
//         }
//     }
//     console.log(lista);
// }



// 12, 0
// 0, 1
// j, j+1

// aux = j+1 = 0
// j+1 = 12
// j = aux = 0




// let lista = [123, -3, 4, 0, 34, -45, 12, 5, 120, 70, -34, 3]

// let numeroMenor = lista[0]
// let posição

// for (let i = 0; i<lista.length; i++){
//     if(lista[i] < numeroMenor){
//         numeroMenor = lista[i]
//         posição = i
//     }

// }
// console.log(numeroMenor, posição)



// lista = [1,2,3,4,5,6,7]

// j = 0

// lista2 = []

// for(let i = lista.length - 1; i>=0; i--){
//     lista2[j] = lista[i]
//     j++
// }

// console.log(lista2);



// lista = [1, 2, 3, 4, 5]

// // Digitou o numero 2 no prompt

// lista = [5, 4, 1, 2, 3]


let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numero = Number(prompt("Digite um numero: "))
let removido = 0

for (let i = 0; i < numero; i++) {
    removido = lista.pop(); 
    lista.unshift(removido); 
}
console.log(lista)