const express = require("express")
const router = express.Router()
const empleadosController = require("../controllers/empleados.controller")

//Crear un usuario (empleado):
router.post("/", empleadosController.create)

//Listar todos los usuarios (empleados):
router.get("/", empleadosController.find)

//Encontrar por id un usuario (empleado):
router.get("/:id", empleadosController.findOne)

//Modificar un usuario (empleado):
router.put("/:id", empleadosController.update)

//Eliminar un usuario (empleado):
router.delete("/:id", empleadosController.remove)

module.exports = router