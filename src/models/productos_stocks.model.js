const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = sequelize.define("PRODUCTOS_STOCKS", {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  PRODUCTO_ID: DataTypes.INTEGER,
  TIENDA_ID: DataTypes.INTEGER,
  STOCK: DataTypes.INTEGER
}, { timestamps: false });