import {
  GraphQLFieldConfig,
  GraphQLList,
  GraphQLString,
  ThunkObjMap,
} from "graphql";
import db from "./db";
import { getUser, getUsers } from "./resolvers";
import userTypes from "./type";

const query: ThunkObjMap<GraphQLFieldConfig<any, any, any>> = {
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
