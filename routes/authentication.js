const express = require("express");
const createUser = require("../controllers/user/createUser");
const loginUser = require("../controllers/authentication/loginUser");

const isEmailExist = require("../middleware/emailExist");
const isUserExist = require("../middleware/userExist");

const authenticationRouter = express.Router();

authenticationRouter.post("/login", isUserExist, loginUser);
authenticationRouter.post("/sign-up", isEmailExist, createUser);

module.exports = authenticationRouter;
