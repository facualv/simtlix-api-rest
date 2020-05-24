const booksDb = require("../db/books.db.json");
const _ = require("lodash");

module.exports = {
  create: (book) => {
    booksDb.push(book);
  },
  update: (id, title, authorId) => {
    _.each(booksDb, (book) => {
      if (book.id == id) {
        book.title = title;
        book.authorId = authorId;
      }
    });
  },
  delete: (id) => {
    const removedBook = _.remove(booksDb, (book) => {
      return id == book.id;
    });
    return removedBook;
  },
  get: (id) => {
    const book = booksDb.find((book) => {
      return book.id == id;
    });
    return book;
  },
  getAll: () => {
    return booksDb;
  }
};
