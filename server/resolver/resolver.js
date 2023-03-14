const { books, authors } = require("../data/static");

const resolvers = {
  //Query
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id == args.id),
    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id == args.id),
  },

  Book: {
    author: (parent, args) =>
      authors.find((author) => author.id == parent.authorId),
  },

  Author: {
    books: (parent, args) => books.filter((book) => book.authorId == parent.id),
  },

  // Mutation
  Mutation: {
    craeteAuthor: (parent, args) => args,
    createBook: (parent, args) => args,
  },
};

module.exports = resolvers;
