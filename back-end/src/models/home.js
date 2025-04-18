const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
    id: Number,
     Name: String,
    Price: Number,
    Image: String,
    Description: String,
});

module.exports = mongoose.model("HomeProduct", HomeSchema);
