const Empleado = require("../models/empleados.model");
let response ={
    msg: "",
    exito: false
}

// Función para crear un nuevo empleado:
exports.create = function(req,res){
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion
    })

// Si son capturados erroneamente sale error y al contrario mostrará usuario correctamente
    empleado.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se guardó correctamente"
        res.json(response)
    })
}

// Función listar usuarios de la base de datos (empleados):
exports.find = function(req, res){
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}

// Función encontrar un usuario por id (empleado):
exports.findOne = function(req, res){
    Empleado.findOne({_id: req.params.id}, function(err, empleado){
        res.json(empleado)
    })
}

// Función modificar usuario (empleado):
exports.update = function(req, res){
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body. apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    }

    Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado fue modificado correctamente"
        res.json(response)
    })
}

// Función eliminar usuario (empleado):
exports.remove = function(req, res){
    Empleado.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err)
            response.exito = false,
            response.msg = "Error al eliminar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado ha sido eliminado correctamente"
        res.json(response)
    })
}

