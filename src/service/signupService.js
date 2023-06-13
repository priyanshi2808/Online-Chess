import dbg from "debug";
const debug = dbg("service:signup");
import hashPassword from "../controllers/hashPassword";
import addNewUser from "../data/addNewUser";
import checkIfUserExists from "../data/checkIfUserExists";
import loginService from "./loginService";

const signupService = async (user) => {
  var password = user.password;
  return await checkIfUserExists(user)
    .then((response) => {
      if (response.success) {
        return Promise.reject({
          success: false,
          message: "User Already Exists",
        });
      }
      var password = hashPassword(user.password);
      debug(password);
      user.password = password;
      return addNewUser(user);
    })
    .then((response) => {
      if (response.success) {
        debug("Signup successful");
        return loginService({
          email: response.user.email,
          password: password,
        });
      }
    })
    .catch((err) => {
      debug(err);
      return err;
    });
};
export default signupService;
