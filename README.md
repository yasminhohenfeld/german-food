# :de: German Food :de:

## Visão Geral 
Olá, seja bem-vindo(a) ao meu projeto de aplicação web de comida alemã. 

## Descrição 
Esta é uma aplicação em desenvolvimento que tem como objetivo proporcionar aos usuários explorar a gastromia alemã. Nesta lojinha virtual, os usuários irão poder navegar nos produtos e suas descrições, conhecer mais sobre a loja, fazer cadastro e efetuar compras. 

## :computer: Frontend 

**Aplicação disponível no link: https://yasminhohenfeld.github.io/german-food/**

#### Tecnologias e ferramentas utilizas para o projeto frontend:

- React
- HTML
- Bootstrap
- JavaScript

## :computer: Backend

**Pré-requisitos**:

 É necessário ter o [node.js](https://nodejs.org/en/download) e [docker](https://docs.docker.com/get-docker/) instalados em sua máquina. 

**Instalação das Dependências**:

Abra o terminal e navegue até a pasta do projeto backend. Em seguida, execute o seguinte comando para instalar as dependências:

```
npm install
```

**Banco de Dados com Docker**:

A aplicação utiliza docker para gerenciamento de banco de dados. Após a instalação na sua máquina, execute o seguinte comando para baixar e iniciar uma instância do PostgreSQL como um contêiner Docker:

```
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

Em seguida verifique no terminal se o contêiner está em execução corretamente com o seguinte comando:

```
docker ps
```
Se estiver tudo certinho com o tutorial acima, o contêiner do PostgreSQL será listado entre os contêineres em execução. Agora precisaremos criar o banco de dados da aplicação, o esquema está localizado ainda na pasta backend disponível no arquivo: 'createDataBases.sql'.

**Rodar a Aplicação**:

Agora que todas as configurações estão ok, vamos rodar a aplicação com o seguinte comando:

```
node index.js
```
Se tudo estiver certo, você verá uma mensagem no terminal: 'Api rodando'.

#### Tecnologias e ferramentas utilizas para o projeto backend:

- Node.js
- Docker
- Yup
- Bcrypt
- Express
- Jsonwebtoken
- PostgreSQL
- Docker

## :gear: Estado do Projeto ##

Atualmente, a aplicação encontra-se em fase de desenvolvimento. O frontend e o backend estão sendo implementados separadamente, mas em breve pretendo interligá-los para entregar uma versão completa da aplicação.


