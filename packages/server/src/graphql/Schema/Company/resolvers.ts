import { GraphQLFieldResolver } from "graphql";
import db from "./db";

export const getCompany: GraphQLFieldResolver<any, any> = async (_, { _id }) =>
  await db.findById(_id);

export const getCompanies: GraphQLFieldResolver<any, any> = async () =>
  await db.findAll();

export const createCompany: GraphQLFieldResolver<any, any> = async (
  _,
  { company }
) => await db.create(company);

export const updateCompany: GraphQLFieldResolver<any, any> = async (
  _,
  { _id, company }
) => await db.update(_id, company);
