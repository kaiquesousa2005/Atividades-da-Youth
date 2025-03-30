
function alterar() {
    let nome = prompt("Digite o titulo")
    document.getElementById('titulo').innerHTML = nome
}

function contador() {
    document.getElementById('click').innerHTML++
}

function alterar() {
    let texto = document.querySelector('#mudar')
 if( texto.style.backgroundColor == 'black'){
 texto.style.backgroundColor = 'white'
 texto.style.color = 'black'
} else {
     texto.style.backgroundColor = 'black'
 texto.style.color = 'white'
}

}