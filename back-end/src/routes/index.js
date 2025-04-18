const productRouter = require("./productRoutes");
const usersRouter = require("./userRoutes");
const chatRouter = require("./chatRoute");

function route(app) {
  app.use("/api/products", productRouter);
  app.use("/api/chat", chatRouter);
  app.use("/api", usersRouter);
}

module.exports = route;
