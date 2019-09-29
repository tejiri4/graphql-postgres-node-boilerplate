import { gql } from "apollo-server-express";

export default gql`
  type Hero {
    name: String
    powers: [String]
  }

  type Query {
    heroes: [Hero]
  }

  type Mutation {
    addHero(name: String, powers: [String]): Hero
  }
`;
