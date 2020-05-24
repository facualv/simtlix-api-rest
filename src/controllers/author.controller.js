const { AuthorRepository, BookRepository } = require("../repositories/index");

module.exports = {
  create: (req, res) => {
    const { id, name, lastname } = req.body;
    if (id && name && lastname) {
      const newAuthor = req.body;
      AuthorRepository.create(newAuthor);
      res.json("Author created Succesfully");
    } else {
      res.status(400);
    }
  },
  update: (req, res) => {
    const id = req.params.authorId;
    if (id) {
      const { name, lastname } = req.body;
      console.log(name);
      AuthorRepository.update(id, name, lastname);
      res.json("Author updated Succesfully");
    } else {
      res.status(400);
    }
  },
  delete: (req, res) => {
    const id = req.params.authorId;
    const deletedAuthor = AuthorRepository.delete(id);
    res.json({ deleted: "ok", deletedAuthor: deletedAuthor });
  },
  get: (req, res) => {
    const id = req.params.authorId;
    console.log(id);
    const author = AuthorRepository.get(id);
    res.json(author);
  },
  getAll: (req, res) => {
    const authors = AuthorRepository.getAll();
    res.json(authors);
  },
  getPublishedBooks: (req, res) => {
    const id = req.params.authorId;
    console.log(id);
    const books = BookRepository.getAll();
    const publishedBooks = books.filter((book) => {
      return book.id == id;
    });

    res.json(publishedBooks);
  }
};
