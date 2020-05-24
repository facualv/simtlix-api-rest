const { BookRepository } = require("../repositories/index");

module.exports = {
  create: (req, res) => {
    const { id, title, authorId } = req.body;
    if (id && title && authorId) {
      const newBook = req.body;
      BookRepository.create(newBook);
      res.json({ added: "ok" });
    } else {
      res.status(400);
    }
  },
  update: (req, res) => {
    const id = req.params.bookId;
    if (id) {
      const { title, authorId } = req.body;
      console.log(title);
      BookRepository.update(id, title, authorId);
      res.json({ modified: "ok" });
    } else {
      res.status(400);
    }
  },
  delete: (req, res) => {
    const id = req.params.bookId;
    const removedBook = BookRepository.delete(id);
    res.json({ deleted: "ok", deletedBook: removedBook });
  },
  get: (req, res) => {
    const id = req.params.bookId;
    const book = BookRepository.get(id);
    res.json(book);
  },
  getAll: (req, res) => {
    const books = BookRepository.getAll();
    res.json(books);
  }
};
