const { registerUserSchema } = require('../validations/userSchemas');
const { selectUser } = require('../databases');
const db = require('../databases');
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {

    const {nome, email, senha} = (req.body)

    try {
        await registerUserSchema.validate(req.body);

        const queriedData = await selectUser(email);

        if (queriedData !== null){
            return res.status(400).json("Já existe um usuário cadastrado com este email");
        }

        const passwordEncryption = await bcrypt.hash(senha, 10);

        const user = await db.query(`insert into public.usuario (nome, email, senha) values ('${nome}', '${email}', '${passwordEncryption}')`)

        if (user.rowCount === 0){
            return res.status(400).json("Não foi possível cadastrar o usuário tente novamente!")
        }

        return res.status(200).send(`Usuário cadastrado com sucesso, ${nome}! Faça login utilizando o email: ${email}`);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const listUser = async (req, res) => {
    try {
        return res.status(200).send("Ok")
    }catch(error){
        return res.status(500).json(error.message);
    }
}


module.exports = {
    createUser
}