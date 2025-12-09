const express = require("express");
const getCategory = require("../controllers/category/getCategory");
const createCategory = require("../controllers/category/createCategory");
const deleteCategory = require("../controllers/category/deleteCategory");
const updateCategory = require("../controllers/category/updateCategory");
const verifyJwt = require("../middleware/verifyJwt");
const categoryRouter = express.Router();

categoryRouter.post("/",  createCategory);
categoryRouter.get("/", getCategory);
categoryRouter.delete("/:id",  deleteCategory);
categoryRouter.put("/:id", updateCategory);

module.exports = categoryRouter;
