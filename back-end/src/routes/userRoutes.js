// routes/userRoutes.js
const express = require("express");
const UserController = require("../controllers/userController.js");
const {
  authenticate,
  authorizeAdmin,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/users", authenticate, authorizeAdmin, UserController.getAllUsers);
router.get("/users/:id", authenticate, UserController.getUserById);
router.put(
  "/users/:id",
  authenticate,
  authorizeAdmin,
  UserController.updateUser
);
router.delete(
  "/users/:id",
  authenticate,
  authorizeAdmin,
  UserController.deleteUser
);
// Route đăng ký
router.post("/signin", UserController.signin);

// Route đăng nhập
router.post("/login", UserController.login);

module.exports = router;
