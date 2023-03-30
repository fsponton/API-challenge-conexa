const { findAll } = require("../repositories/userRepository")

const list_users = async (req, res) => {
    try {
        const { page, limit } = req.query
        const users = await findAll({ page, limit });
        return res.status(200).json(users)
    } catch (err) {
        return res.status(500).json({ status: "error", message: err.message })
    }

}


module.exports = {
    list_users
}