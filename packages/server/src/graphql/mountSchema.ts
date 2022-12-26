import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { discoverSchemas } from "./Schema/discoverSchemas";

const schemas = discoverSchemas();

export function mountSchema() {
  let types: any[] = [];
  let queries = {};
  let mutations = {};
  for (let [key, value] of schemas) {
    const { type, query, mutation } = require(value);
    types = types.concat(Object.values(type.default));
    queries = { ...queries, ...query.default };
    mutations = { ...mutations, ...mutation.default };
  }
  const schema = new GraphQLSchema({
    types: types,
    query: new GraphQLObjectType({
      name: "Query",
      fields: queries,
    }),
    mutation: new GraphQLObjectType({
      name: "Mutation",
      fields: mutations,
    }),
  });
  return schema;
}
