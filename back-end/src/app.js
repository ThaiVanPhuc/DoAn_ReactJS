const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const route = require("./routes");
const path = require("path");

// Connect to MongoDB
connectDB();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Địa chỉ frontend của bạn
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// Serve static files (images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
route(app);

module.exports = app;
