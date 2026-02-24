const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = sequelize.define("PROMOCIONES", {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  NOMBRE: DataTypes.STRING,
  DESCUENTO: DataTypes.DECIMAL,
  DIAS_SEMANA: DataTypes.JSON
}, { timestamps: false });