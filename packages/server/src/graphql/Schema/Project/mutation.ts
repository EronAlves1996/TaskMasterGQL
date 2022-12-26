import { GraphQLString } from "graphql";
import { createProject, updateProject } from "./resolvers";
import projectTypes from "./type";

const mutation = {
  createProject: {
    type: projectTypes.objectType,
    args: {
      project: { type: projectTypes.inputType },
    },
    resolve: createProject,
  },
  updateProject: {
    type: projectTypes.objectType,
    args: {
      _id: { type: GraphQLString },
      project: { type: projectTypes.inputType },
    },
    resolve: updateProject,
  },
};

export default mutation;
