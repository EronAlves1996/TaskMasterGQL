import {
  GraphQLFieldConfigMap,
  GraphQLList,
  GraphQLString,
  Thunk,
} from "graphql";
import { getUser, getUsers } from "./resolvers";
import userTypes from "./type";

const query: Thunk<GraphQLFieldConfigMap<any, any>> = {
  getUser: {
    type: userTypes.objectType,
    args: {
      _id: { type: GraphQLString },
    },
    resolve: getUser,
  },
  getUsers: {
    type: new GraphQLList(userTypes.objectType),
    resolve: getUsers,
  },
};

export default query;
