const { Router } = require("express");
const { AuthorController } = require("../controllers");

module.exports = function () {
  const router = Router();

  router.get("", AuthorController.getAll);
  router.get("/:authorId", AuthorController.get);
  router.get("/:authorId/books", AuthorController.getPublishedBooks);
  router.post("", AuthorController.create);
  router.put("/:authorId", AuthorController.update);
  router.delete("/:authorId", AuthorController.delete);

  return router;
};
