import { model, Schema } from "mongoose";
import { Company, Task } from "../typeDefinitions";
import { DOMAIN_NAME } from "./definitions";
import companyFinders from "../Company/db";

export const schema = new Schema({
  _id: Schema.Types.ObjectId,
  description: Schema.Types.String,
  isCompleted: Schema.Types.Boolean,
  projectId: Schema.Types.ObjectId,
});

const taskModel = model(DOMAIN_NAME, schema);

const findById = async (id: string) =>
  (await taskModel.findById(id)).toObject();
const findAll = async () =>
  (await taskModel.find()).map((entries) => entries.toObject());
const create = async (company: Company) =>
  (await taskModel.create(company)).toObject();
const update = async (_id: string, company: Company) =>
  (await taskModel.findOneAndUpdate({ _id }, company)).toObject();
const findByCompany = async (companyId: string) =>
  await taskModel.find({
    company: await companyFinders.findById(companyId),
  });
const findByProject = async (projectId: string) =>
  await taskModel.find({ projectId });

export default {
  findById,
  findAll,
  create,
  update,
  findByCompany,
};
