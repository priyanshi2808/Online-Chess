import dotenv from "dotenv";
dotenv.config();
module.exports = {
  HOST_NAME: process.env.HOST_NAME,
  PORT: process.env.PORT,
};
