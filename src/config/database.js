const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",   // 👈 ESTO ES LO QUE FALTA O ESTÁ MAL
    logging: false
  }
);

module.exports = sequelize;