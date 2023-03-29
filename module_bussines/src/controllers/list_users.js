//Requerir Modelo de user
const User = require("../models/UserSchema")


const list_users = (req, res) => {
    try {
        User.find({}).then((users) => {
            return res.status(200).json({ users })
        })

    } catch (err) {
        return res.status(500).json({ status: "error", message: err.message })
    }

}


module.exports = {
    list_users
}