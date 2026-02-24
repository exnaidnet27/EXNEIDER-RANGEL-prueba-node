const { Category, Product } = require("../models");
const { fn, col } = require("sequelize");

exports.getCategoriesWithProducts = async () => {
  return await Category.findAll({
    attributes: [
      "id",
      "nombre",
      [fn("COUNT", col("Products.id")), "total_products"]
    ],
    include: [
      {
        model: Product,
        attributes: [],
        required: true // INNER JOIN (solo categorías con productos)
      }
    ],
    group: ["Category.id"],
    order: [[fn("COUNT", col("Products.id")), "DESC"]]
  });
};