const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = sequelize.define("PEDIDOS", {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  FECHA: DataTypes.DATE
}, { timestamps: false });