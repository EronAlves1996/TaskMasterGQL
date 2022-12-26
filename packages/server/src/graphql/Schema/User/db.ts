import { model, Schema } from "mongoose";
import { User } from "../typeDefinitions";
import { DOMAIN_NAME } from "./definitions";

const schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: Schema.Types.String,
  company: {
    type: Schema.Types.ObjectId,
    ref: "company",
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "project",
    },
  ],
});

const userModel = model(DOMAIN_NAME, schema);

const findById = async (id: string) =>
  (await userModel.findById(id)).toObject();
const findAll = async () =>
  (await userModel.find()).map((entries) => entries.toObject());
const create = async (user: User) => (await userModel.create(user)).toObject();
const update = async (_id: string, user: User) =>
  (await userModel.findOneAndUpdate({ _id }, user)).toObject();
const findByCompany = async (companyId: string) =>
  await userModel.find({
    company: companyId,
  });
const findByProject = async (projectId: string) =>
  await userModel.find({ projects: [projectId] });

export default {
  findById,
  findAll,
  create,
  update,
  findByCompany,
  findByProject,
};
