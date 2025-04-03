const productRouter = require("./productRoutes");

function route(app) {
  app.use("/api/products", productRouter);
}

module.exports = route;
