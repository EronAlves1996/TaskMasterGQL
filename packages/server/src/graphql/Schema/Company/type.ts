import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { graphqlTypes } from "../typeDefinitions";

const DOMAIN_NAME = "company";

const objectType = new GraphQLObjectType({
  name: DOMAIN_NAME,
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const inputType = new GraphQLInputObjectType({
  name: DOMAIN_NAME,
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const companyTypes: graphqlTypes = {
  objectType,
  inputType,
};

export default companyTypes;
