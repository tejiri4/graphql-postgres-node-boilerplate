import chai from 'chai';
import { graphql } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from '../schema';
import resolvers from '../resolvers';

const { expect } = chai;

const schema = makeExecutableSchema({ typeDefs, resolvers });

const graphqlTestCall = async (
  query,
  variables,
) => {
  return graphql(
    schema,
    query,
    undefined,
    {},
    variables
  );
};

export { 
  expect, 
  graphqlTestCall
};