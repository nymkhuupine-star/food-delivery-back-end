const express = require("express");
const createUser = require("../controllers/user/createUser");
const loginUser = require("../controllers/authentication/loginUser");
const UserModel = require("../schemas/userSchema");
const isUserExist = require("../middleware/isUserExist");
const isEmailExist = require("../middleware/emailExist");

const authenticationRouter = express.Router();

authenticationRouter.get("/login", isUserExist, loginUser);
authenticationRouter.post("/sign-up", isEmailExist, createUser);

module.exports = authenticationRouter;
