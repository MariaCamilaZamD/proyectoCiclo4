const Novio = require("../models/novios.model");
let response ={
    msg: "",
    exito: false
}

// Función para crear un nuevo novio:
exports.create = function(req,res){
    let novio = new Novio({
        novio_id: req.body.novio_id,
        nombre: req.body.nombre,
        edad: req.body.edad,
        estatura: req.body.estatura,
        contextura: req.body.contextura,
        nacionalidad: req.body.nacionalidad,
        etnia: req.body.etnia
    })

    novio.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el novio"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El novio se guardó correctamente"
        res.json(response)
    })
}

// Función listar novios de la base de datos:
exports.find = function(req, res){
    Novio.find(function(err, novios){
        res.json(novios)
    })
}

// Función encontrar un novio por id:
exports.findOne = function(req, res){
    Novio.findOne({_id: req.params.id}, function(err, novio){
        res.json(novio)
    })
}

// Función modificar novio:
exports.update = function(req, res){
    let novio = {
        novio_id: req.body.novio_id,
        nombre: req.body.nombre,
        edad: req.body.edad,
        estatura: req.body.estatura,
        contextura: req.body.contextura,
        nacionalidad: req.body.nacionalidad,
        etnia: req.body.etnia
    }

    Novio.findByIdAndUpdate(req.params.id, {$set: novio}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el novio"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El novio fue modificado correctamente"
        res.json(response)
    })
}

// Función eliminar novio:
exports.remove = function(req, res){
    Novio.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err)
            response.exito = false,
            response.msg = "Error al eliminar el novio"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El novio ha sido eliminado correctamente"
        res.json(response)
    })
}

