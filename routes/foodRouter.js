const express = require("express");
const createFood = require("../controllers/food/createFood");
const getFood = require("../controllers/food/getFood");
const updateFood = require("../controllers/food/updateFood");
const deleteFood = require("../controllers/food/deleteFood");
const getFoodById = require("../controllers/food/getFoodById");

const foodRouter = express.Router();
foodRouter.get("/", getFood);
foodRouter.post("/", createFood);
foodRouter.get("/:id", getFoodById);
foodRouter.put("/:id", updateFood);
foodRouter.delete("/:id", deleteFood);

module.exports = foodRouter;
