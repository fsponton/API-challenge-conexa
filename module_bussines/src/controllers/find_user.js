const User = require("../models/UserSchema")

const find_user = async (req, res) => {
    try {
        const email = req.query
        const user = await User.findOne({ email: email.email }, { _id: 1, email: 1 });
        return res.status(200).json(user)
    } catch (err) {
        return res.status(500).json({ status: "error", message: err.message })
    }
}


module.exports = {
    find_user
}