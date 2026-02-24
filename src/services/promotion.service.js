const { Promotion, Store, StorePromotion } = require("../models");
const { Op } = require("sequelize");

exports.getPromotionsByDay = async (day) => {
  const index = day - 1; // lunes=1 -> posición 0

  const today = new Date();

  const promotions = await Promotion.findAll({
    include: [
      {
        model: Store,
        attributes: ["id", "name"],
        through: {
          model: StorePromotion,
          where: {
            inicio: { [Op.lte]: today },
            fin: { [Op.gte]: today }
          }
        }
      }
    ]
  });

  // Filtrar por día en memoria (JSON array)
  return promotions.filter(promo => 
    promo.dias_semana &&
    promo.dias_semana[index] === 1
  );
};