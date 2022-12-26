import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import companyTypes from "../Company/type";
import projectTypes from "../Project/type";
import { DOMAIN_NAME } from "./definitions";

const userFields = {
  name: { type: new GraphQLNonNull(GraphQLString) },
  company: { type: companyTypes.objectType },
  projects: { type: new GraphQLList(projectTypes.objectType) },
};

const objectType = new GraphQLObjectType({
  name: DOMAIN_NAME,
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLString) },
    ...userFields,
  },
});

const inputType = new GraphQLInputObjectType({
  name: DOMAIN_NAME + "Input",
  fields: {
    ...userFields,
    company: { type: GraphQLString },
    projects: { type: new GraphQLList(GraphQLString) },
  },
});

const userTypes = {
  objectType,
  inputType,
};

export default userTypes;
