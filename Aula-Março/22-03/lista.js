function adicionar() {
    let lista = document.querySelector('.lista_compras')
    let produto = document.querySelector('#input').value

    let item = document.createElement('li')
    item.innerText = produto

    lista.appendChild(item)
}