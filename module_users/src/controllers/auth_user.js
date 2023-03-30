const { findandAuthenticated } = require("../repositories/userRepository")

const auth_user = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) { return res.status(400).json({ status: "error", message: "missing info" }) };
        const newUser = await findandAuthenticated({ email, password });
        return res.status(200).json(newUser)
    } catch (err) {
        return res.status(500).json({ status: "error", message: err.message })
    }
}

module.exports = {
    auth_user
}
