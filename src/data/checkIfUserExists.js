import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:checkIfUserExists");
const checkIfUserExists = async ({ email }) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (err, result) => {
        if (err) {
          debug(err);
          reject({ success: false, message: err });
        } else {
          debug(result);
          if (result.length > 0) {
            resolve({
              success: true,
              message: "User found",
              data: { user: result[0] },
            });
          } else {
            resolve({
              success: false,
              message: "No Account found with email: " + email,
            });
          }
        }
      }
    );
  });
};
export default checkIfUserExists;
