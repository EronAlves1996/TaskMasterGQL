import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import projectTypes from "../Project/type";
import { graphqlTypes } from "../typeDefinitions";
import { DOMAIN_NAME } from "./definitions";

const taskFields = {
  description: { type: new GraphQLNonNull(GraphQLString) },
  isCompleted: { type: new GraphQLNonNull(GraphQLBoolean) },
  project: { type: projectTypes.objectType },
};

const objectType = new GraphQLObjectType({
  name: DOMAIN_NAME,
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLString) },
    ...taskFields,
  },
});

const inputType = new GraphQLInputObjectType({
  name: DOMAIN_NAME + "Input",
  fields: {
    ...taskFields,
    project: { type: GraphQLString },
  },
});

const taskTypes: graphqlTypes = {
  objectType,
  inputType,
};

export default taskTypes;
