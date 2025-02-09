import express from 'express'

const app = express()

const users = []

app.post('/users', (request, response) => {

    console.log(request)
    
    request.send('Ok post')
})

app.get('/users', (request, response) => {
    response.send('Ok, deu bom')
})

app.listen(3000)


/*Criar nossa API de Usuários

-Criar um usuários
-Listar todos os usuário
*/