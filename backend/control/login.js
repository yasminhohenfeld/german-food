const { loginSchema } = require('../validations/loginSchemas');
const { selectUser } = require('../databases');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {

    const {email, senha} = (req.body);
    try {
        await loginSchema.validate(req.body);
        const userFound = await selectUser(email);

        if (userFound === null){
            return res.status(400).json("Usuário não encontrado, digite o dados corretamente ou crie uma conta!");
        };
        const passwordVerified = await bcrypt.compare(senha, userFound.senha);

        if (passwordVerified !== true){
            return res.status(400).json("Senha incorreta!");
        }

        const token = await jwt.sign({ id: userFound.id }, "yamin", { expiresIn: '8h' });

        return res.status(200).json({
            nome: userFound.nome,
            email: userFound.email,
            token: token
        });
    }catch(error){
        return res.status(500).json(error.message);
    }
}

module.exports = login;