import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLScalarType,
} from "graphql";

export interface graphqlTypes {
  objectType: GraphQLObjectType;
  inputType: GraphQLInputObjectType;
}

export interface Task {
  _id?: string;
  description: string;
  isCompleted: boolean;
  projectId: string;
}

export interface Company {
  _id?: string;
  name: string;
}

export interface Project {
  _id?: string;
  name: string;
  description: string;
  company: Company;
  deadline: Date;
  tasks: Task[];
}

export interface User {
  _id?: string;
  name: string;
  company: Company;
  projects: Project[];
}

export interface followUp {
  _id?: string;
  comment: string;
  date: Date;
  project: Project;
  user: User;
}

export const graphqlDate = new GraphQLScalarType(Date);
