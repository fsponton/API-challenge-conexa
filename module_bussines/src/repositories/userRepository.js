const User = require("../models/UserSchema")

const findAll = async () => {
    try {
        return await User.find({}, { _id: 1, email: 1 })
    } catch (err) {
        throw err
    }
}


module.exports = {
    findAll
}