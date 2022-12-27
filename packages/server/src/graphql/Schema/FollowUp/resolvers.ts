import { GraphQLFieldResolver } from "graphql";
import db from "./db";

export const createFollowUp: GraphQLFieldResolver<any, any> = async (
  _,
  { user: followUp }
) => await db.create(followUp);

export const updateFollowUp: GraphQLFieldResolver<any, any> = async (
  _,
  { _id, user: followUp }
) => await db.update(_id, followUp);

export const getFollowUp: GraphQLFieldResolver<any, any> = async (_, { _id }) =>
  await db.findById(_id);

export const getFollowUps: GraphQLFieldResolver<any, any> = async () =>
  await db.findAll();
