const jwt = require('jsonwebtoken')
const { SECRET_WORD } = process.env


module.exports = (req, res, next) => {
    const authorization = req.get('Authorization')
    let token = ''

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    } else { return res.status(401).send({ status: "error", message: "authorizacion invalida" }) }

    const decodedToken = jwt.decode(token, `${SECRET_WORD}`)

    if (!token || !decodedToken.id) {
        return res.status(401).json({ status: "error", message: 'token faltante o invalido' })
    }

    const { id } = decodedToken.id
    res.userId = id

    next()
}