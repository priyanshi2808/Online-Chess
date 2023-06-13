import jwt from "jsonwebtoken";
import config from "../config";
import dbg from "debug";
const debug = dbg("controllers:getToken");

const getToken = (payload, expiresIn) => {
  debug(config.SECRET_KEY);
  return jwt.sign(payload, config.SECRET_KEY, { expiresIn: expiresIn });
};
export default getToken;
