import { model, Schema } from "mongoose";
import { Company } from "../typeDefinitions";
import { DOMAIN_NAME } from "./definitions";

export const schema = new Schema({
  _id: Schema.Types.ObjectId,
  description: Schema.Types.String,
  isCompleted: Schema.Types.Boolean,
});

const taskModel = model(DOMAIN_NAME, schema);

const findById = async (id: string) =>
  (await taskModel.findById(id).populate("project")).toObject();
const findAll = async () =>
  (await taskModel.find().populate("project")).map((entries) =>
    entries.toObject()
  );
const create = async (company: Company) =>
  (await taskModel.create(company)).toObject();
const update = async (_id: string, company: Company) => {
  await taskModel.updateOne({ _id }, company);
  return await findById(_id);
};
const findByCompany = async (companyId: string) =>
  await taskModel
    .find({ project: { company: { _id: companyId } } })
    .populate("project");
const findByProject = async (projectId: string) =>
  await taskModel.find({ project: projectId }).populate("project");

export default {
  findById,
  findAll,
  create,
  update,
  findByCompany,
  findByProject,
};
