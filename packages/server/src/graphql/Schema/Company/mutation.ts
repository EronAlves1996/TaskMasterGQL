import { GraphQLFieldConfig, GraphQLObjectType, GraphQLString } from "graphql";
import db from "./db";
import companyTypes from "./type";

const type = companyTypes.objectType;
const company = { type: companyTypes.inputType };

const createCompany: GraphQLFieldConfig<any, any, any> = {
  type,
  args: {
    company,
  },
  resolve: async (_, { company }) => await db.create(company),
};

const updateCompany: GraphQLFieldConfig<any, any, any> = {
  type,
  args: {
    _id: { type: GraphQLString },
    company,
  },
  resolve: async (_, { _id, company }) => await db.update(_id, company),
};

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createCompany,
    updateCompany,
  },
});

export default mutation;
