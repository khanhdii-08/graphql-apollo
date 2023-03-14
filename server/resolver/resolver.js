const resolvers = {
  //Query
  Query: {
    books: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks(),
    book: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getBook(args.id),
    authors: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllAuthors(),
    author: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthor(args.id),
  },

  Book: {
    author: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthor(parent.authorId),
  },

  Author: {
    books: (parent, args, { mongoDataMethods }) =>
      mongoDataMethods.getAllBooks({ authorId: parent.id }),
  },

  // Mutation
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createAuthor(args),
    createBook: async (parent, args, { mongoDataMethods }) =>
      mongoDataMethods.createBook(args),
  },
};

module.exports = resolvers;
