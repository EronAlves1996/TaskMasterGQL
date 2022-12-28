import { GraphQLFieldResolver } from "graphql";
import db from "./db";

export const createUser: GraphQLFieldResolver<any, any> = async (
  _,
  { user }
) => {
  user.password = sha512(user.password);
  return await db.create(user);
};
export const updateUser: GraphQLFieldResolver<any, any> = async (
  _,
  { _id, user }
) => await db.update(_id, user);
export const getUser: GraphQLFieldResolver<any, any> = async (_, { _id }) =>
  await db.findById(_id);
export const getUsers: GraphQLFieldResolver<any, any> = async () =>
  await db.findAll();
