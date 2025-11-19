const express = require("express");
const createUser = require("../controllers/user/createUser");
const getUser = require("../controllers/user/getUser");
const deleteUser = require("../controllers/user/deleteUser");
const putUser = require("../controllers/user/updateUser");

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.put("/", putUser);
userRouter.delete("/", deleteUser);
userRouter.post("/", createUser);

module.exports = userRouter;
