const jwt = require('jsonwebtoken')
const { SECRET_WORD } = process.env

//middleware de extraction de tokend
module.exports = (req, res, next) => {
    const authorization = req.get('Authorization')
    console.log(req)
    let token = ''

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    } else { return res.status(401).send({ error: "authorizacion invalida" }) }

    const decodedToken = jwt.decode(token, `${SECRET_WORD}`)

    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token faltante o invalido' })
    }

    const { id } = decodedToken.id
    res.userId = id

    next()
}