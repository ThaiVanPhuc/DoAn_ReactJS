const express = require("express");
const homeRouter = express.Router();
const homeController = require("../controllers/homeController");

homeRouter.get("/all", homeController.getAllProducts);
// // router.post("/", homeController.createProduct);
// // Lấy sản phẩm theo ID
// homeRouter.get("/:id", homeController.getProductById);
module.exports = homeRouter;
