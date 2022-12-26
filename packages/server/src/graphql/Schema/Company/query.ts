import {
  GraphQLFieldConfigMap,
  GraphQLList,
  GraphQLString,
  Thunk,
} from "graphql";
import { getCompanies, getCompany } from "./resolvers";
import companyTypes from "./type";

const query: Thunk<GraphQLFieldConfigMap<any, any>> = {
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
};

export default query;
