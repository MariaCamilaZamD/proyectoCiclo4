const express = require("express")
const router = express.Router()
const noviosController = require("../controllers/novios.controller")

//Crear un novio en la base de datos:
router.post("/", noviosController.create)

//Listar todos los novios:
router.get("/", noviosController.find)

//Encontrar por id un novio:
router.get("/:id", noviosController.findOne)

//Modificar un novio por id:
router.put("/:id", noviosController.update)

//Eliminar un usuario por novio por id:
router.delete("/:id", noviosController.remove)

module.exports = router