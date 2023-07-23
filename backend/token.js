const jwt = require('jsonwebtoken');

const decodedToken = async (authorization) => {
    const token = authorization.substring(7);
    try{
        return user = jwt.verify(token, 'yamin');
    }catch(error){
        return null
    }
}

module.exports = 
    decodedToken
