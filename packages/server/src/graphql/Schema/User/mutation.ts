import { GraphQLFieldConfigMap, GraphQLString, Thunk } from "graphql";
import { createUser, updateUser } from "./resolvers";
import userTypes from "./type";

const mutation: Thunk<GraphQLFieldConfigMap<any, any>> = {
  createUser: {
    type: userTypes.objectType,
    args: {
      user: { type: userTypes.inputType },
    },
    resolve: createUser,
  },
  updateUser: {
    type: userTypes.objectType,
    args: {
      _id: { type: GraphQLString },
      user: { type: userTypes.inputType },
    },
    resolve: updateUser,
  },
};

export default mutation;
