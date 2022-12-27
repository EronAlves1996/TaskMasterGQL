import { model, Schema, Types } from "mongoose";
import { followUp } from "../typeDefinitions";
import { DOMAIN_NAME } from "./definitions";

const schema = new Schema({
  _id: Schema.Types.ObjectId,
  comment: Schema.Types.String,
  date: Schema.Types.Date,
  project: {
    type: Schema.Types.ObjectId,
    ref: "project",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const followUpModel = model(DOMAIN_NAME, schema);

const findById = async (id: string) =>
  (await followUpModel.findById(id).populate(["project", "user"])).toObject();

const findAll = async () =>
  (await followUpModel.find().populate(["project", "user"])).map((entries) =>
    entries.toObject()
  );

const create = async (followUp: followUp) => {
  const followUpToSave = new followUpModel({
    ...followUp,
    _id: new Types.ObjectId(),
    date: new Date(),
  });
  return (await followUpToSave.save()).toObject();
};

const update = async (_id: string, followUp: followUp) => {
  await followUpModel.updateOne({ _id }, followUp);
  return await findById(_id);
};

const findByProject = async (projectId: string) =>
  await followUpModel
    .find({ project: { _id: projectId } })
    .populate(["user", "project"]);

const findByUser = async (userId: string) =>
  await followUpModel
    .find({ user: { _id: userId } })
    .populate(["user", "project"]);

export default {
  findById,
  findAll,
  create,
  update,
  findByProject,
  findByUser,
};
