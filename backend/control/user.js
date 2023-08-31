const { registerUserSchema } = require('../validations/userSchemas');
const { selectUser, selectUserId, deleteUserdb } = require('../database');
const db = require('../database');
const bcrypt = require('bcrypt');
const decodedToken = require('../token');

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
    
        const user = await decodedToken(req.headers.authorization);
        if (user === null){
            return res.status(400).json("Usuário não logado, por favor faça login ou insira o token corretamente");
        }
        
        console.log (user);
        const userData = await selectUserId(user.id);



        return res.status(200).send({
            nome: userData.nome,
            email: userData.email,
            id: userData.id
        })
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const deleteUser = async (req, res) => {

    try{
        const user = await decodedToken(req.headers.authorization);
        if (user === null){
            return res.status(400).json("Usuário não logado, por favor faça login ou insira o token corretamente");
        }

        const deletedUser = await deleteUserdb(user.id);

        if(deletedUser === false){
            return res.status(400).json("Parece que este usuário já foi deletado ou não encontra-se cadastrado no sistema. Confirme realizando um novo login")
        }

        return res.status(200).json("Usuário deletado com sucesso");

    }catch(error){
        return res.status(500).json(error.message);
    }
}


module.exports = {
    createUser,
    listUser,
    deleteUser
}