const express = require("express");
const createFood = require("../controllers/food/createFood");
const getFood = require("../controllers/food/getFood");
const updateFood = require("../controllers/food/updateFood");
const deleteFood = require("../controllers/food/deleteFood");
const getFoodByCategoryId = require("../controllers/food/getFoodByCategoryId");

const foodRouter = express.Router();

foodRouter.post("/", createFood);

foodRouter.get("/", getFood);
foodRouter.get("/category/:id", getFoodByCategoryId);

foodRouter.put("/:id", updateFood);
foodRouter.delete("/:id", deleteFood);

module.exports = foodRouter;
