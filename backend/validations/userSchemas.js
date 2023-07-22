const yup = require('./yupSettings');

const registerUserSchema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required().email(),
    senha: yup.string().required().min(8).max(12)
});

module.exports = {
    registerUserSchema
}