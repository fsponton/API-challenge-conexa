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
    const exist_user = await findOne({ email: emailToLower })
    if (exist_user) throw new Error("usuario existente")

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

    if (!encryptedPassword) throw new Error("usuario  o password invalidos")


    const userForToken = {
        id: newUser._id,
        mail: newUser.email
    }
    const token = jwt.sign(userForToken, `${SECRET_WORD}`, { expiresIn: 60 * 60 })

    const user = {
        ...userForToken, token
    }

    return (user)

}


module.exports = {
    findOne,
    findAndSave,
    findandAuthenticated
}