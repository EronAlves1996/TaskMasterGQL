import { GraphQLFieldConfigMap, GraphQLString, Thunk } from "graphql";
import { creatTask, updateTask } from "./resolvers";
import taskTypes from "./type";

const type = taskTypes.objectType;
const task = { type: taskTypes.inputType };

const mutation: Thunk<GraphQLFieldConfigMap<any, any>> = {
  createTask: {
    type,
    args: {
      task,
    },
    resolve: creatTask,
  },
  updateTask: {
    type,
    args: {
      _id: { type: GraphQLString },
      task,
    },
    resolve: updateTask,
  },
};

export default mutation;
