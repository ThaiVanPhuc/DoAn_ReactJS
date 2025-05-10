const express = require("express");
const newController = require("../controllers/newController");
const {
  authenticate,
  authorizeAdmin,
} = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", newController.getNews);
router.get("/:id", newController.getNewById);
router.post("/", authenticate, authorizeAdmin, newController.addNew);
router.delete("/:id", authenticate, authorizeAdmin, newController.deleteNew);
router.patch("/:id", authenticate, authorizeAdmin, newController.updateNew);

module.exports = router;
