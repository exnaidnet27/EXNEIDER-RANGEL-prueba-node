const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = sequelize.define("TIENDAS_PROMOCIONES", {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  TIENDA_ID: DataTypes.INTEGER,
  PROMOCION_ID: DataTypes.INTEGER,
  INICIO: DataTypes.DATE,
  FIN: DataTypes.DATE
}, { timestamps: false });