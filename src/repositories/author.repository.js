const authorsDb = require("../db/authors.db.json");
const booksDb = require("../db/books.db.json");

const _ = require("lodash");

module.exports = {
  create: (author) => {
    authorsDb.push(author);
  },
  update: (id, name, lastname) => {
    _.each(authorsDb, (author) => {
      if (author.id == id) {
        author.name = name;
        author.lastname = lastname;
      }
    });
  },
  delete: (id) => {
    const removedAuthor = _.remove(authorsDb, (author) => {
      return id == author.id;
    });
    return removedAuthor;
  },
  get: (id) => {
    console.log(id);
    const author = authorsDb.find((author) => {
      return author.id == id;
    });
    return author;
  },
  getAll: () => {
    return authorsDb;
  },
  getPublishedBooks: (id) => {
    const publishedbooks = booksDb.find((book) => {
      return book.authorId == id;
    });
    return publishedbooks;
  }
};
