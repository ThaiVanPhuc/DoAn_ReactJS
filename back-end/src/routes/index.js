const productRouter = require("./productRoutes");
const usertRouter = require("./userRoutes");

function route(app) {
  app.use("/api/products", productRouter);
  app.use("/api", usertRouter);
}

module.exports = route;
