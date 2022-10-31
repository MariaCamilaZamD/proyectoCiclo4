
//Mendiante el usuarios.controller se esta llamando un proceso de autenticación, proceso que se realiza mediante el jwt, el cual permite generar un token y este token generado realiza un proceso de condificación y decodificación
const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, "__recret__") // recret es de secreto (para verificar de lo que se esta haciendo)
        req.usuario = decoded
        next()
    } catch (error) {
        res.status(401)
        res.json({code: 4, msg:"No tiene permiso para ver el contenido"})
    }
}

module.exports = auth

/*El token es un número hexadecimal de 128 bits, en dado caso que el proceso de verificación o autenticación
sea incorrecto, genero un estatus 401 que me va a indicar que no tiene autorización*/