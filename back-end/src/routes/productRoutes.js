const express = require("express");
const ProductController = require("../controllers/productController.js");
const {
  authenticate,
  authorizeAdmin,
} = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", ProductController.getAllProduct);
router.get("/:id", ProductController.getProductById);
router.post("/", authenticate, authorizeAdmin, ProductController.addProduct);
router.put(
  "/:id",
  authenticate,
  authorizeAdmin,
  ProductController.updateProduct
);
router.delete(
  "/:id",
  authenticate,
  authorizeAdmin,
  ProductController.deleteProduct
);

module.exports = router;
