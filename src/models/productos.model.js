const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = sequelize.define("PRODUCTOS", {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  NOMBRE: DataTypes.STRING,
  PRECIO: DataTypes.DECIMAL,
  CATEGORIA_ID: DataTypes.INTEGER
}, { timestamps: false });