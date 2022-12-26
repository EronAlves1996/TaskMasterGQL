import { GraphQLObjectType, GraphQLString } from "graphql";
import { createCompany, updateCompany } from "./resolvers";
import companyTypes from "./type";

const type = companyTypes.objectType;
const company = { type: companyTypes.inputType };

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createCompany: {
      type,
      args: {
        company,
      },
      resolve: createCompany,
    },
    updateCompany: {
      type,
      args: {
        _id: { type: GraphQLString },
        company,
      },
      resolve: updateCompany,
    },
  },
});

export default mutation;
