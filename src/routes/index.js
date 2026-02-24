const express = require("express");
const router = express.Router();

const productosController = require("../controllers/productos.controller");
const categoriasController = require("../controllers/categorias.controller");
const promocionesController = require("../controllers/promociones.controller");

router.get("/productos", productosController.getProductos);
router.get("/productos/top", productosController.getTopProductos);
router.get("/categorias", categoriasController.getCategorias);
router.get("/promociones/:day", promocionesController.getPromociones);

module.exports = router;