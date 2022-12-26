import { GraphQLObjectType, GraphQLString } from "graphql";
import db from "./db";
import type from "./type";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createCompany: {
      type: type.objectType,
      args: {
        company: { type: type.inputType },
      },
      resolve: (_, { company }) => db.create(company),
    },
    updateCompany: {
      type: type.objectType,
      args: {
        id: { type: GraphQLString },
        user: { type: type.inputType },
      },
      resolve: (_, { id, company }) => db.update({ id }, company),
    },
  },
});

export default mutation;
