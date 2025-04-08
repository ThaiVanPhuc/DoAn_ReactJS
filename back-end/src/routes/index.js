const productRouter = require("./productRoutes");
const usersRouter = require("./userRoutes");

function route(app) {
  app.use("/api/products", productRouter);
  app.use("/api", usersRouter);
}

module.exports = route;
