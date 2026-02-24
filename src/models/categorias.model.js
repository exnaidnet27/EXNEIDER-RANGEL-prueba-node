const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = sequelize.define("CATEGORIAS", {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  NOMBRE: DataTypes.STRING
}, { timestamps: false });