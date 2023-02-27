const { registerUserSchema } = require('../validations/userSchemas');


const createUser = async (req, res) => {

    try {
        await registerUserSchema.validate(req.body)

        console.log ("to sendo")
        return res.status(200).send("Ok")
    }catch(error){
        return res.status(500).json(error.message);
    }
}

module.exports = {
    createUser
}