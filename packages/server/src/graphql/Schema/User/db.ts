import { model, Schema, Types } from "mongoose";
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
  (await userModel.findById(id).populate(["company", "projects"])).toObject();
const findAll = async () =>
  (await userModel.find().populate(["company", "projects"])).map((entries) =>
    entries.toObject()
  );
const create = async (user: User) => {
  const userToSave = new userModel({ ...user, _id: new Types.ObjectId() });
  return (await userToSave.save()).toObject();
};
const update = async (_id: string, user: User) => {
  await userModel.updateOne({ _id }, user);
  return await findById(_id);
};
const findByCompany = async (companyId: string) =>
  await userModel
    .find({
      company: companyId,
    })
    .populate("company", "projects");
const findByProject = async (projectId: string) =>
  await userModel
    .find({ projects: [projectId] })
    .populate("company", "projects");

export default {
  findById,
  findAll,
  create,
  update,
  findByCompany,
  findByProject,
};
