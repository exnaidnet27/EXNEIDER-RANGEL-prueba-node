const { Sequelize } = require("sequelize");
const { Categoria, Producto } = require("../models");

/**
 * 3️⃣ Endpoint:
 * Categorías con al menos un producto
 * ordenadas por cantidad DESC
 */
exports.getCategorias = async (req, res, next) => {
  try {
    const categorias = await Categoria.findAll({
      attributes: [
        "ID",
        "NOMBRE",
        [Sequelize.fn("COUNT", Sequelize.col("PRODUCTOS.ID")), "TOTAL_PRODUCTOS"]
      ],
      include: [
        {
          model: Producto,
          attributes: []
        }
      ],
      group: ["CATEGORIAS.ID"],
      having: Sequelize.literal("COUNT(PRODUCTOS.ID) > 0"),
      order: [[Sequelize.literal("TOTAL_PRODUCTOS"), "DESC"]]
    });

    res.json(categorias);
  } catch (error) {
    next(error);
  }
};