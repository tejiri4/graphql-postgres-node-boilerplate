import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from "cors";
import db from './models';
import typeDefs  from './schema';
import resolvers from './resolvers';
 
const server = new ApolloServer({
  typeDefs, 
  resolvers, 
  context: { db },
  uploads: false 
});
 
const app = express();
app.use(cors());
server.applyMiddleware({ app });

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

export default server;