const User = require("../models/UserSchema")


const findOne = async ({ email }) => {
    try {
        return await User.findOne({ email })
    } catch (err) {
        throw err
    }
}


module.exports = {
    findOne
}