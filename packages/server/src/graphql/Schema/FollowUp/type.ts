import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLString,
} from "graphql";
import projectTypes from "../Project/type";
import userTypes from "../User/type";
import { DOMAIN_NAME } from "./definitions";

const followUpFields = {
  comment: { type: new GraphQLNonNull(GraphQLString) },
  project: { type: new GraphQLNonNull(projectTypes.objectType) },
  user: { type: new GraphQLNonNull(userTypes.objectType) },
};

const objectType = new GraphQLObjectType({
  name: DOMAIN_NAME,
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLString) },
    ...followUpFields,
    date: { type: new GraphQLScalarType(Date) },
  },
});

const inputType = new GraphQLInputObjectType({
  name: DOMAIN_NAME + "Input",
  fields: {
    ...followUpFields,
    project: { type: new GraphQLNonNull(GraphQLString) },
    user: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const followUpTypes = {
  objectType,
  inputType,
};

export default followUpTypes;
