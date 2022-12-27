import {
  GraphQLFieldConfigMap,
  GraphQLList,
  GraphQLString,
  Thunk,
} from "graphql";
import { getFollowUp, getFollowUps } from "./resolvers";
import followUpTypes from "./type";

const query: Thunk<GraphQLFieldConfigMap<any, any>> = {
  getFollowUp: {
    type: followUpTypes.objectType,
    args: {
      _id: { type: GraphQLString },
    },
    resolve: getFollowUp,
  },
  getFollowUps: {
    type: new GraphQLList(followUpTypes.objectType),
    resolve: getFollowUps,
  },
};

export default query;
