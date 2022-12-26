import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const userFields = {
  name: { type: new GraphQLNonNull(GraphQLString) },
  company: { type: GraphQLString },
  projects: { type: new GraphQLList(GraphQLString) },
};

const objectType = new GraphQLObjectType({
  name: "user",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    ...userFields,
  },
});

const inputType = new GraphQLInputObjectType({
  name: "user",
  fields: {
    ...userFields,
  },
});

const userTypes = {
  objectType,
  inputType,
};

export default userTypes;
