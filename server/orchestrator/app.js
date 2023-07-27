const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { itemResolvers, itemTypeDefs } = require("./schema/productSchema");
const { userTypeDefs, userResolvers } = require("./schema/usersSchema");
const server = new ApolloServer({
  typeDefs: [userTypeDefs, itemTypeDefs],
  resolvers: [userResolvers, itemResolvers],
  introspection: true,
});

startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
