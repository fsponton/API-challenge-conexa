require("dotEnv/config")

const { SECRET_WORD, URI, PORT_USERS } = process.env


module.exports = {
    SECRET_WORD,
    URI,
    PORT_USERS
}