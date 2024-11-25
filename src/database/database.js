import Sequelize from "sequelize";

import {
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOST,
  DB_PORT,
} from "../routes/config.js";

export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD,{
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
});
