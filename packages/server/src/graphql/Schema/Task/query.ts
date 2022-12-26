import {
  GraphQLFieldConfigMap,
  GraphQLList,
  GraphQLString,
  Thunk,
} from "graphql";
import {
  getTask,
  getTasks,
  getTasksFromCompany,
  getTasksFromProject,
} from "./resolvers";
import taskTypes from "./type";

const query: Thunk<GraphQLFieldConfigMap<any, any>> = {
  getTask: {
    type: taskTypes.objectType,
    args: {
      _id: { type: GraphQLString },
    },
    resolve: getTask,
  },
  getTasks: {
    type: new GraphQLList(taskTypes.objectType),
    resolve: getTasks,
  },
  getTasksByCompany: {
    type: new GraphQLList(taskTypes.objectType),
    args: {
      companyId: { type: GraphQLString },
    },
    resolve: getTasksFromCompany,
  },
  getTasksByProject: {
    type: new GraphQLList(taskTypes.objectType),
    args: {
      projectId: { type: GraphQLString },
    },
    resolve: getTasksFromProject,
  },
};

export default query;
