# Challenge Covid Daily Cases - Backend  
_Geraldo Henrique G. Fonseca_

## Descrição 

Este projeto proposto pela Coodesh consiste em uma API REST sobre casos registrados de COVID-19, que tem como 3 endpoints principais: 
- /dates, que retorna uma lista de datas no dataset 
- /cases/:date/counter, que retorna a contagem diária de casos por país
- /cases/:date/cumulative, que retorna a contagem de casos por país cumulativamente, até determinada nada

## Tecnologias utilizadas 

- O projeto foi desenvolvido em NodeJS
- Tecnologias auxiliares: Docker, Mongo/Mongoose, Jest
- Documentação feita com Swagger (Open API)

## Criação do banco de dados 

O banco de dados foi criado a partir de um arquivo .csv. Para isso, foi utilizado um script que fiz usando a bibioteca **csvtojson**.   
O script está em [github/henriquewho/csv-to-mongoatlas](https://github.com/henriquewho/csv-to-mongoatlas).

## Como instalar o projeto 

O arquivo /utils/config.js exporta a string de conexão para o aplicativo, a partir de um arquivo .env.
Desta forma, é necessário criar um arquivo .env na raiz da pasta logo após clonar o projeto. O arquivo deve conter: 
>MONGODB_URI=sua_string_de_conexão

O projeto pode ser então instalado para testes via docker, usando o comando:   
> docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

Alternativamente, pode-se rodar o aplicativo com: 
> npm install   

> npm run dev

## Documentação

A documentação foi feita utilizando Swagger, com add-on de interface para visualização.
Para a interface da documentação, acessar [https://localhost:3003/api-docs/](https://localhost:3003/api-docs/) enquanto rodar o aplicativo localmente ou [https://coodesh-covid.herokuapp.com/api-docs](https://coodesh-covid.herokuapp.com/api-docs) para a versão demo / online. 

## Link heroku para a API
[Heroku - Coodesh Covid](https://coodesh-covid.herokuapp.com/)

## Apresentação
[Link para a apresentação](https://www.loom.com/embed/7d6aa39e185040d29202fd384c58ec63/)