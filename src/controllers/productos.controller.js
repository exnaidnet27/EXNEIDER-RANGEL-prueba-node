const { Sequelize } = require("sequelize");
const {
  Producto,
  ProductoStock,
  Tienda,
  PedidoProducto
} = require("../models");

/**
 * 1️⃣ Endpoint:
 * Listar productos con datos básicos
 * + stock por tienda
 */
exports.getProductos = async (req, res, next) => {
  try {
    const productos = await Producto.findAll({
      attributes: ["ID", "NOMBRE", "PRECIO"],
      include: [
        {
          model: ProductoStock,
          attributes: ["STOCK"],
          include: [
            {
              model: Tienda,
              attributes: ["ID", "NOMBRE", "DIRECCION"]
            }
          ]
        }
      ]
    });

    res.json(productos);
  } catch (error) {
    next(error);
  }
};

/**
 * 2️⃣ Endpoint:
 * Top 10 productos más vendidos
 */
exports.getTopProductos = async (req, res, next) => {
  try {
    const topProductos = await PedidoProducto.findAll({
      attributes: [
        "PRODUCTO_ID",
        [Sequelize.fn("SUM", Sequelize.col("CANTIDAD")), "TOTAL_VENDIDO"]
      ],
      include: [
        {
          model: Producto,
          attributes: ["ID", "NOMBRE", "PRECIO"]
        }
      ],
      group: ["PRODUCTO_ID"],
      order: [[Sequelize.literal("TOTAL_VENDIDO"), "DESC"]],
      limit: 10
    });

    res.json(topProductos);
  } catch (error) {
    next(error);
  }
};