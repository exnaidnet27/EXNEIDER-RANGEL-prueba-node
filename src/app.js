const express = require("express");
const sequelize = require("./config/database");
require("dotenv").config();

const routes = require("./routes");
const { errorHandler } = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

app.use("/api", routes);

app.use(errorHandler);

sequelize.authenticate()
  .then(() => {
    console.log("DB conectada correctamente");
    return sequelize.sync({ alter: false });
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error("Error conectando DB:", err);
  });