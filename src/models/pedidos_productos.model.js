const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = sequelize.define("PEDIDOS_PRODUCTOS", {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  PEDIDO_ID: DataTypes.INTEGER,
  PRODUCTO_ID: DataTypes.INTEGER,
  CANTIDAD: DataTypes.INTEGER
}, { timestamps: false });