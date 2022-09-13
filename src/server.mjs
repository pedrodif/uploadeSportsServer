import express from 'express';

const app = express()

// Criando a primeira rota com o método get().
// O get recebe dois parametros, sendo o primeiro a rota e o segundo parâmetro é uma função,
// sendo essa a função a ser executada quando o usuário acessar a rota definifa no primeiro parametro -> get()
// a função que é o segundo parametro do método get, já possui dois parametros predefinidos, sendo eles o request e o response
// através do parametro response associado ao método .json consigo devolver uma resposta para o usuário em qualquer
// formato que seja válido podendo ser um array [] ou objeto {}

app.get('/ads', (request, response) => {
  return response.json([
    {id: 1, name: 'Anuncio 1'},
    {id: 2, name: 'Anuncio 2'},
    {id: 3, name: 'Anuncio 3'},
  ])
})


// através do método listen estamos definindo uma porta do localHost
app.listen(3333)


//Através desse código criamos o seguinte endereço:
// localhost:3333/adsj