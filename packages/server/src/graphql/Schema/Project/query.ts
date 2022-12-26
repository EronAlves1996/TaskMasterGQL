import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { getProject, getProjects, getProjectsByCompany } from "./resolvers";
import projectTypes from "./type";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
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
  },
});

export default query;
