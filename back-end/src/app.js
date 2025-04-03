const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const route = require("./routes");

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

//Routes
route(app);

module.exports = app;
