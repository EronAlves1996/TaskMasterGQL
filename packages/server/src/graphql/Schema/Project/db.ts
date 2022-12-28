import { model, Schema, Types } from "mongoose";
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
});

const projectModel = model(DOMAIN_NAME, schema);

const findById = async (id: string) =>
  (await projectModel.findById(id).populate(["company"])).toObject();

const findAll = async () =>
  (await projectModel.find().populate(["company"])).map((entries) =>
    entries.toObject()
  );

const findAllById = async (id: string[]) =>
  (await projectModel.find({ _id: id }).populate(["company"])).map((entries) =>
    entries.toObject()
  );

const create = async (project: Project) =>
  (
    await (
      await projectModel.create({ ...project, _id: new Types.ObjectId() })
    ).populate("company")
  ).toObject();

const update = async (_id: string, project: Project) => {
  await projectModel.updateOne({ _id }, project);
  return await findById(_id);
};

const findByCompany = async (companyId: string) =>
  await projectModel
    .find({
      company: companyId,
    })
    .populate(["company"]);

export default {
  findById,
  findAllById,
  findAll,
  create,
  update,
  findByCompany,
};
