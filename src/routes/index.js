const express = require("express");
const morgan = require("morgan");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");
const { AuthorRoutes, BookRoutes } = require("./index.routes");

module.exports = function () {
  const router = express.Router();

  //Default Middlewares
  router.use(express.json()).use(morgan("dev"));

  //Routes
  router.use("/books", BookRoutes());
  router.use("/authors", AuthorRoutes());

  //Other Middlewares
  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);
  return router;
};
