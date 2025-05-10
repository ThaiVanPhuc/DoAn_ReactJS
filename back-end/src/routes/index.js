const productRouter = require("./productRoutes");
const usersRouter = require("./userRoutes");
const newsRouter = require("./newsRoutes");

function route(app) {
  app.use("/api/products", productRouter);
  app.use("/api/news", newsRouter);
  app.use("/api", usersRouter);
}

module.exports = route;
