const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OrderProduct = sequelize.define("OrderProduct", {
  quantity: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: "PEDIDOS_PRODUCTOS",
  timestamps: false
});

module.exports = OrderProduct;