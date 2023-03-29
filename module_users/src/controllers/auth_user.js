const { findOne } = require("../repositories/userRepository")

const { SECRET_WORD } = require("../config/enviroment")
const jwt = require('jsonwebtoken')

const auth_user = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) { return res.status(400).json({ status: "error", message: "faltan datos" }) };

        //Busca usuario y si lo encuentra compara la pw, si correcto devuelve el id, user y token en un  json. 
        const newUser = await findOne({ email });

        if (newUser.password === password) {
            const userForToken = {
                id: newUser._id,
                mail: newUser.email
            }

            //comparar el hash pw
            const token = jwt.sign(userForToken, `${SECRET_WORD}`, { expiresIn: 60 * 60 })

            return res.status(200).json({
                id: newUser._id,
                mail: newUser.email,
                token
            })
        }
        return res.status(404).json({ status: "error", message: "usuario y password es invalido" })
    } catch (err) {
        return res.status(500).json({ status: "error", message: err.message })
    }

}


module.exports = {
    auth_user
}
