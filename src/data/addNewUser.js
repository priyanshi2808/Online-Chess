import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:addNewUser");
const addNewUser = async (user) => {
  return new Promise((resolve, reject) => {
    var value = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    pool.query("INSERT INTO users set ?", [value], (err, result) => {
      if (err) {
        reject({
          success: false,
          message: err,
        });
      } else {
        resolve({
          success: true,
          message: result,
          user: user,
        });
      }
    });
  });
};
export default addNewUser;
