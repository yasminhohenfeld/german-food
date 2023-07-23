const express = require('express');
const route = express(); 
const user = require('./control/user');
const login = require('./control/login');

route.post('/user', user.createUser); 
route.post('/login', login);
route.get('/user', user.listUser);

module.exports = route