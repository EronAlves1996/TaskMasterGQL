import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLString,
} from "graphql";
import { graphqlTypes } from "../typeDefinitions";
import { DOMAIN_NAME } from "./definitions";

const projectFields = {
  name: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: new GraphQLNonNull(GraphQLString) },
  company: { type: GraphQLString },
  deadline: { type: new GraphQLNonNull(new GraphQLScalarType(Date)) },
  tasks: { type: new GraphQLList(GraphQLString) },
};

const objectType = new GraphQLObjectType({
  name: DOMAIN_NAME,
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLString) },
    ...projectFields,
  },
});

const inputType = new GraphQLInputObjectType({
  name: DOMAIN_NAME,
  fields: {
    ...projectFields,
  },
});

const projectTypes: graphqlTypes = {
  objectType,
  inputType,
};

export default projectTypes;
