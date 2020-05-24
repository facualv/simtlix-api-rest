const express = require("express");
const { BookController } = require("../controllers");

module.exports = function () {
  const router = express.Router();

  router.get("", BookController.getAll);
  router.get("/:bookId", BookController.get);
  router.post("", BookController.create);
  router.put("/:bookId", BookController.update);
  router.delete("/:bookId", BookController.delete);

  return router;
};
