export default {
  Query: {
    heroes: async (_, __, { db }) => {
      return await db.Heroes.findAll();
    }
  },
  Mutation: {
    addHero: async(_, args, { db }) => {
      return await db.Heroes.create(args)
    }
  }
};
