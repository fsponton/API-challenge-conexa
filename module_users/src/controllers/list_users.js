const axios = require("axios")

const list_users = async (req, res) => {
    try {
        const { page, limit, } = req.query
        const listUsers = await axios(`http://localhost:8888/api/negocio/list?page=${page}&limit=${limit}`)
        return res.status(200).json(listUsers.data)
    } catch (err) {
        return res.status(500).json({ status: "error", message: err.message })
    }
}

module.exports = {
    list_users
}