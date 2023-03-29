const User = require("../models/UserSchema")
const validator = require('validator');
const { findAndSave } = require("../repositories/userRepository");

const register_user = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!validator.isEmail(email)) return res.status(400).json({ status: "error", message: "email no valido" })
        if (!email || !password) { return res.status(400).json({ status: "error", message: "faltan datos" }) };
        const newUser = await findAndSave({ email, password });

        return res.status(200).json({ status: "success", message: "creado", newUser })
    } catch (err) {
        return res.status(500).json({ status: "error", message: err.message })
    }
}


module.exports = {
    register_user
}
