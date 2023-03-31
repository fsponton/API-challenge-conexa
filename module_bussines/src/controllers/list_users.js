const { findAll } = require("../repositories/userRepository")

const list_users = async (req, res) => {
    try {
        const { page, limit } = req.query
        const users = await findAll({ page, limit });
        console.log(users)
        return res.status(200).json({ status: "success", listUsers: users })
    } catch (err) {
        return res.status(500).json({ status: "error", message: err.message })
    }

}


module.exports = {
    list_users
}