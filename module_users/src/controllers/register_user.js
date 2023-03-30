const validator = require('validator');
const { findAndSave } = require("../repositories/userRepository");

const register_user = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!validator.isEmail(email)) return res.status(400).json({ status: "error", message: "incorrect email" })
        if (!email || !password) { return res.status(400).json({ status: "error", message: "missing info" }) };
        const newUser = await findAndSave({ email, password });

        return res.status(200).json({ status: "success", message: "user created", newUser })
    } catch (err) {
        return res.status(500).json({ status: "error", message: err.message })
    }
}


module.exports = {
    register_user
}
