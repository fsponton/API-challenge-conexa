const User = require("../models/UserSchema")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { SECRET_WORD } = require("../config/enviroment")

const findOne = async ({ email }) => {
    try {
        return await User.findOne({ email })
    } catch (err) {
        throw err
    }
}


const findAndSave = async ({ email, password }) => {
    const emailToLower = email.toLowerCase()
    const user = await findOne({ email: emailToLower })
    if (user) throw new Error("email is already used")

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)

    const newUser = new User({ email: emailToLower, password: hash })
    newUser.save()
    return newUser
}


const findandAuthenticated = async ({ email, password }) => {
    const emailToLower = email.toLowerCase()
    const newUser = await findOne({ email: emailToLower })

    const encryptedPassword = newUser === null ? false
        : await bcrypt.compare(password, newUser.password)


    if (!encryptedPassword) throw new Error("user or password is incorrect")

    const userForToken = {
        id: newUser._id,
        mail: newUser.email
    }
    const token = jwt.sign(userForToken, `${SECRET_WORD}`, { expiresIn: 60 * 60 })

    return ({ ...userForToken, token })
}

module.exports = {
    findOne,
    findAndSave,
    findandAuthenticated
}