// import { createServer } from 'node:http'
// import { readFile } from 'node:fs/promises';

// const server = createServer(async (request, response) => {
//     if (request.url == '/') {
//         const html = await readFile('./index.html')

//         response.writeHead(200, { 'Content-Type': 'text/html' })
//         return response.end(html)
//     }


//     response.statusCode = 404
//     response.end("Pagina não encontrada")
// })

// server.listen(3001, () => {
//     console.log("Rodando na porta 3000");
// })

import express from "express";
import { readFile } from 'node:fs/promises';
import path from 'node:path'

const app = express()

app.get('/', async (req, res) => {
    const filePath = path.resolve('index.html')

    html = html.replace ()
    const html = await readFile(filePath, 'utf-8')
    res.setHeader('Content-Type', 'text/html')
    res.send(html)

})

app.get('/msg/:nome', (req, res) => {
    const { nome } = req.params
    res.send(`Olá ${nome} seja bem vindo`)
})

app.get('/pesquisa', (req, res) => {
    const { produto } = req.query
    console.log(produto)

    res.send(`Olá o produto pesquisado foi ${produto}`)
})

app.get('/mes/:numero', (req, res) => {
    const { numero } = req.params
    res.send(`Seu aniversario é mes ${numero}`)

}) 

app.get('/data', (req, res) => {
    const {dia} = req.query
    console.log(dia)
    
    res.send(`Sua data de aniversario é dia ${dia}`)
})

app.listen(3001, () => {
    console.log('servidor rodando')
})