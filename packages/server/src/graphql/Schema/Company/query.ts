import {
  GraphQLFieldConfig,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import db from "./db";
import companyTypes from "./type";

const getCompany: GraphQLFieldConfig<any, any, any> = {
  type: companyTypes.objectType,
  args: {
    _id: { type: GraphQLString },
  },
  resolve: async (_, { _id }) => await db.findById(_id),
};

const getCompanies: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLList(companyTypes.objectType),
  resolve: async () => await db.findAll(),
};

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getCompany,
    getCompanies,
  },
});

export default query;
