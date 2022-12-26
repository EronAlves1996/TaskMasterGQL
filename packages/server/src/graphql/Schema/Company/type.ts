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
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const inputType = new GraphQLInputObjectType({
  name: DOMAIN_NAME,
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const toExpose: graphqlTypes = {
  objectType,
  inputType,
};

export default toExpose;
