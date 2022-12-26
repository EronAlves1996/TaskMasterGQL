import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import db from "./db";
import type from "./type";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getCompany: {
      type: type.objectType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (_, { id }) => db.findById(id),
    },
    getCompanies: {
      type: new GraphQLList(type.objectType),
      resolve: () => db.findAll(),
    },
  },
});

export default query;
