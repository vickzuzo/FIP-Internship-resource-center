const express = require("express");
const {
  login,
  register,
  verifyAccount,
  getCurrentUser,
} = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.route("/login").post(login);
authRouter.route("/register").post(register);
authRouter.route("/verify_account").post(verifyAccount);
authRouter.route("/get_current_user").post(getCurrentUser);

module.exports = authRouter;
