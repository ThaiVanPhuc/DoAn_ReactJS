const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imgStory: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: {
    email: { type: String, required: true },
    username: { type: String, required: true },
  },
});

const News = mongoose.model("News", newsSchema);
module.exports = News;
