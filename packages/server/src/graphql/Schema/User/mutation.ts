import { GraphQLFieldConfig, GraphQLString, ThunkObjMap } from "graphql";
import { createUser, updateUser } from "./resolvers";
import userTypes from "./type";

const mutation: ThunkObjMap<GraphQLFieldConfig<any, any, any>> = {
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
