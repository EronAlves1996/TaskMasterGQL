import {
  GraphQLFieldConfigMap,
  GraphQLList,
  GraphQLString,
  Thunk,
} from "graphql";
import { getProject, getProjects, getProjectsByCompany } from "./resolvers";
import projectTypes from "./type";

const query: Thunk<GraphQLFieldConfigMap<any, any>> = {
  getProject: {
    type: projectTypes.objectType,
    args: {
      _id: { type: GraphQLString },
    },
    resolve: getProject,
  },
  getProjects: {
    type: new GraphQLList(projectTypes.objectType),
    resolve: getProjects,
  },
  getProjectsByCompany: {
    args: {
      companyId: { type: GraphQLString },
    },
    type: new GraphQLList(projectTypes.objectType),
    resolve: getProjectsByCompany,
  },
};

export default query;
