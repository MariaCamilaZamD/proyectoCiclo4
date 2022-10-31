const Usuario = require("../models/usuarios.model");
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


exports.login = function(req, res, next){

    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex"); //Encriptamiento de la contraseña a través del sha512

    // Para poder ingresar necesita encontrar un usuario, pero tiene que coincidir el usuario y contraseña para que se genere el token
    Usuario.findOne({ usuario: req.body.usuario, pass: hashedpass}, function(err, usuario){
        let response = {
        token:null
        }
        
        // Si no coincide usuario y contraseña genera un token nullo
        if(usuario !== null){
            response.token = jwt.sign({
                id: usuario._id,
                usuario: usuario.usuario
            }, "__recret__",
            { expiresIn: '12h'} //Si el usuario deja la sesión abierta, a las 12 horas se expira la sesión
            )
        }
        res.json(response);
    })
}