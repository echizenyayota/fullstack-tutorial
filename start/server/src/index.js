require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStroe } = require('./utils');
const resolevers = require('./resolvers');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = createStore();

const server = new ApolloServer({ 
  typeDefs, 
  datasources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: newUserAPI({ store })
  }) 
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
