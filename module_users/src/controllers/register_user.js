//Requerir Modelo de user
const User = require("../models/UserSchema")

const register_user = (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) { return res.status(400).json({ status: "error", message: "faltan datos" }) };

        //Crea usuario en memo
        const newUser = new User({ email, password })

        //Busca usuario, si no esta lo crea. 
        User.findOne({ email }).then((user) => {
            if (user) return res.status(404).json({ status: "error", message: "usuario existente" })
            //agregar hash de pw y mandar
            newUser.save()
            return res.status(200).json({ status: "success", message: "creado", newUser })
        })

    } catch (err) {
        return res.status(400).json({ status: "error", message: err.message })
    }

}


module.exports = {
    register_user
}
