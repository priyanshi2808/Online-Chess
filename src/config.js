import dotenv from "dotenv";
dotenv.config();
module.exports = {
  HOST_NAME: process.env.HOST_NAME,
  PORT: process.env.PORT,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DATABASE: process.env.DATABASE,
};
