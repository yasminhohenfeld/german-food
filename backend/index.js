const express = require('express');
const app = express();
const route = require('./routes');

app.use(express.json());
app.use(route);

app.listen(8000);

console.log("Api rodando");