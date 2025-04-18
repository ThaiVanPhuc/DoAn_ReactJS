const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const route = require("./routes");
const path = require("path");

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
route(app);

module.exports = app;
