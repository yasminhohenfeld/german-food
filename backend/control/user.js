const createUser = async (req, res) => {
    try {
        console.log ("to sendo")
        return res.status(200).send("Ok")
    }catch(error){
        return res.status(500).json(error.message);
    }
}

module.exports = {
    createUser
}