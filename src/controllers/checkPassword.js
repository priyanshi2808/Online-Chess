import bcrypt from "bcrypt";

const checkPassword = async ({ user_password, password }) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(user_password, password, (bErr, bResult) => {
      if (bResult) {
        resolve({
          success: true,
          message: "Password is Correct",
        });
      } else {
        reject({
          success: false,
          message: "Password is incorrect!",
        });
      }
    });
  });
};
export default checkPassword;
