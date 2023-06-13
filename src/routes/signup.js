import { Router, response } from "express";
const router = Router();
import dbg from "debug";
import signupService from "../service/signupService";
const debug = dbg("api:signup");

router.post("/signup", async (req, res) => {
  await signupService(req.body)
    .then((response) => {
      debug("signup response " + response + " " + response.message);
      res.send(response);
    })
    .catch((err) => {
      debug(err);
      res.status(500).send({ success: false, message: err.message });
    });
});
export default router;
