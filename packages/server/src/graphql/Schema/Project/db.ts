import { model, Schema } from "mongoose";
import { Project } from "../typeDefinitions";
import { DOMAIN_NAME } from "./definitions";

const schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: Schema.Types.String,
  description: Schema.Types.String,
  company: {
    type: Schema.Types.ObjectId,
    ref: "company",
  },
  deadline: Schema.Types.Date,
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "task",
    },
  ],
});

const projectModel = model(DOMAIN_NAME, schema);

const findById = async (id: string) =>
  (await projectModel.findById(id)).toObject();
const findAll = async () =>
  (await projectModel.find()).map((entries) => entries.toObject());
const create = async (project: Project) =>
  (await projectModel.create(project)).toObject();
const update = async (_id: string, project: Project) =>
  (await projectModel.findOneAndUpdate({ _id }, project)).toObject();
const findByCompany = async (companyId: string) =>
  await projectModel.find({
    company: companyId,
  });

export default {
  findById,
  findAll,
  create,
  update,
  findByCompany,
};
