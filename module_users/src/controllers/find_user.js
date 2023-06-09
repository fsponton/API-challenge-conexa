const axios = require("axios")
const validator = require('validator');

const findByEmail = async (req, res) => {
    try {
        const email = req.query.email

        if (!validator.isEmail(email)) return res.status(400).json({ status: "error", message: "incorrect email" })
        const user = await axios(`http://localhost:8888/api/negocio/user?email=${email}`)
        return res.status(200).json(user.data)
    } catch (err) {
        return res.status(500).json({ status: "error", message: err.message })
    }
}


module.exports = {
    findByEmail
}