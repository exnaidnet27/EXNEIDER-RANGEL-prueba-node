const { Product, Store } = require("../models");

exports.getProductsWithStock = async () => {
  return await Product.findAll({
    attributes: ["id", "name", "price"],
    include: [{
      model: Store,
      attributes: ["id", "name"],
      through: {
        attributes: ["stock"]
      }
    }]
  });
};

exports.getTopProducts = async () => {
  return await OrderProduct.findAll({
    attributes: [
      "product_id",
      [fn("SUM", col("quantity")), "total_vendidos"]
    ],
    include: [{
      model: Product,
      attributes: ["name"]
    }],
    group: ["product_id"],
    order: [[fn("SUM", col("quantity")), "DESC"]],
    limit: 10
  });
};