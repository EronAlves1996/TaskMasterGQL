import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { graphqlTypes } from "../typeDefinitions";
import { DOMAIN_NAME } from "./definitions";

const taskFields = {
  description: { type: new GraphQLNonNull(GraphQLString) },
  isCompleted: { type: new GraphQLNonNull(GraphQLBoolean) },
  projectId: { type: new GraphQLNonNull(GraphQLString) },
};

const objectType = new GraphQLObjectType({
  name: DOMAIN_NAME,
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLString) },
    ...taskFields,
  },
});

const inputType = new GraphQLInputObjectType({
  name: DOMAIN_NAME,
  fields: {
    ...taskFields,
  },
});

const taskTypes: graphqlTypes = {
  objectType,
  inputType,
};

export default taskTypes;
