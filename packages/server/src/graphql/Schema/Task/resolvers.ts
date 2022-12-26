import { GraphQLFieldResolver } from "graphql";
import db from "./db";

export const getTask: GraphQLFieldResolver<any, any> = async (_, { _id }) =>
  await db.findById(_id);

export const getTasks: GraphQLFieldResolver<any, any> = async () =>
  await db.findAll();

export const getTasksFromCompany: GraphQLFieldResolver<any, any> = async (
  companyId: string
) => await db.findByCompany(companyId);

export const getTasksFromProject: GraphQLFieldResolver<any, any> = async (
  projectId: string
) => await db.findByProject(projectId);

export const creatTask: GraphQLFieldResolver<any, any> = async (
  _,
  { company: task }
) => await db.create(task);

export const updateTask: GraphQLFieldResolver<any, any> = async (
  _,
  { _id, task }
) => await db.update(_id, task);
