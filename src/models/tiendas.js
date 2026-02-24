const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = sequelize.define("TIENDAS", {
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  NOMBRE: DataTypes.STRING,
  DIRECCION: DataTypes.STRING
}, { timestamps: false });