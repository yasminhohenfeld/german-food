const yup = require('./yupSettings');

const loginSchema = yup.object().shape({
    email: yup.string().required().email(),
    senha: yup.string().required().min(8).max(12)
});

module.exports = {
    loginSchema
}