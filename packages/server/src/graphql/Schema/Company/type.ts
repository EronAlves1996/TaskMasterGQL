import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { graphqlTypes } from "../typeDefinitions";
import { DOMAIN_NAME } from "./definitions";

const objectType = new GraphQLObjectType({
  name: DOMAIN_NAME,
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const inputType = new GraphQLInputObjectType({
  name: DOMAIN_NAME + "Input",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const companyTypes: graphqlTypes = {
  objectType,
  inputType,
};

export default companyTypes;
