import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { getCompanies, getCompany } from "./resolvers";
import companyTypes from "./type";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getCompany: {
      type: companyTypes.objectType,
      args: {
        _id: { type: GraphQLString },
      },
      resolve: getCompany,
    },
    getCompanies: {
      type: new GraphQLList(companyTypes.objectType),
      resolve: getCompanies,
    },
  },
});

export default query;
