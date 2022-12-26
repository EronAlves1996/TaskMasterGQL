import { GraphQLFieldResolver } from "graphql";
import db from "./db";

export const createUser: GraphQLFieldResolver<any, any, any, unknown> = async (
  _,
  { user }
) => {
  await db.create(user);
};

export const updateUser: GraphQLFieldResolver<any, any, any, unknown> = async (
  _,
  { _id, user }
) => {
  await db.update(_id, user);
};

export const getUser: GraphQLFieldResolver<any, any, any, unknown> = async (
  _,
  { _id }
) => {
  await db.findById(_id);
};

export const getUsers: GraphQLFieldResolver<
  any,
  any,
  any,
  unknown
> = async () => {
  await db.findAll();
};
