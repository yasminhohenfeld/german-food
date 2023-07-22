const express = require('express');
const route = express(); 
const user = require('./control/user');
const login = require('./control/login');

route.post('/user', user.createUser); 
route.post('/login', login);

module.exports = route