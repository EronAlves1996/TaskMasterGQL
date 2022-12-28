import { GraphQLFieldResolver } from "graphql";
import db from "./db";

export const createProject: GraphQLFieldResolver<any, any, any> = async (
  _,
  { project }
) => await db.create(project);

export const updateProject: GraphQLFieldResolver<any, any, any> = async (
  _,
  { _id, project }
) => await db.update(_id, project);

export const getProject: GraphQLFieldResolver<any, any, any> = async (
  _,
  { _id }
) => await db.findById(_id);

export const getProjects: GraphQLFieldResolver<any, any, any> = async () =>
  await db.findAll();

export const getProjectsByCompany: GraphQLFieldResolver<any, any, any> = async (
  _,
  { companyId }
) => await db.findByCompany(companyId);

export const getProjectsById: GraphQLFieldResolver<any, any, any> = async (
  _,
  { _ids }
) => await db.findAllById(_ids);
