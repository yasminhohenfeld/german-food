const express = require('express');
const route = express(); 
const user = require('./control/user');

route.post('/user', user.createUser); 

module.exports = route