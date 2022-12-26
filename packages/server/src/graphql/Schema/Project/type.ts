import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLString,
} from "graphql";
import companyTypes from "../Company/type";
import { graphqlTypes } from "../typeDefinitions";
import { DOMAIN_NAME } from "./definitions";

const projectFields = {
  name: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: new GraphQLNonNull(GraphQLString) },
  company: { type: companyTypes.objectType },
  deadline: { type: new GraphQLNonNull(new GraphQLScalarType(Date)) },
};

const objectType = new GraphQLObjectType({
  name: DOMAIN_NAME,
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLString) },
    ...projectFields,
  },
});

const inputType = new GraphQLInputObjectType({
  name: DOMAIN_NAME + "Input",
  fields: {
    ...projectFields,
    company: { type: GraphQLString },
  },
});

const projectTypes: graphqlTypes = {
  objectType,
  inputType,
};

export default projectTypes;
