import { GraphQLFieldConfigMap, GraphQLString, Thunk } from "graphql";
import { createFollowUp, updateFollowUp } from "./resolvers";
import followUpTypes from "./type";

const mutation: Thunk<GraphQLFieldConfigMap<any, any>> = {
  createFollowUp: {
    type: followUpTypes.objectType,
    args: {
      user: { type: followUpTypes.inputType },
    },
    resolve: createFollowUp,
  },
  updateFollowUp: {
    type: followUpTypes.objectType,
    args: {
      _id: { type: GraphQLString },
      followUp: { type: followUpTypes.inputType },
    },
    resolve: updateFollowUp,
  },
};

export default mutation;
