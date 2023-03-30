const User = require("../models/UserSchema")

const findAll = async ({ page, limit }) => {
    try {
        const users = await User.find({}, { _id: 1, email: 1 }).limit(limit).skip((page - 1) * limit)
        const count = await User.count()
        return ({
            users,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        })

    } catch (err) {
        throw err
    }
}


module.exports = {
    findAll
}