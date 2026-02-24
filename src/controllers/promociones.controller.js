const { Sequelize } = require("sequelize");
const { Promocion, Tienda } = require("../models");

/**
 * 4️⃣ Endpoint:
 * Promociones por día de la semana
 * Ejemplo: /api/promociones/3
 */
exports.getPromociones = async (req, res, next) => {
  try {
    const day = parseInt(req.params.day);

    if (isNaN(day) || day < 1 || day > 7) {
      return res.status(400).json({
        message: "El día debe ser un número entre 1 y 7"
      });
    }

    const index = day - 1;

    const promociones = await Promocion.findAll({
      where: Sequelize.literal(
        `JSON_EXTRACT(DIAS_SEMANA, '$[${index}]') = 1`
      ),
      include: [
        {
          model: Tienda,
          through: { attributes: ["INICIO", "FIN"] }
        }
      ]
    });

    res.json(promociones);
  } catch (error) {
    next(error);
  }
};