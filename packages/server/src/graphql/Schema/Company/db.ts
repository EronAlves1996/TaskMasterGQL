import { model, Schema, Types } from "mongoose";
import { Company } from "../typeDefinitions";
import { DOMAIN_NAME } from "./definitions";

export const schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: Schema.Types.String,
});

const companyModel = model(DOMAIN_NAME, schema);

const findById = async (id: string) =>
  (await companyModel.findById(id)).toObject();
const findAll = async () =>
  (await companyModel.find()).map((entries) => entries.toObject());
const create = async (company: Company) =>
  (
    await companyModel.create({ ...company, _id: new Types.ObjectId() })
  ).toObject();
const update = async (_id: string, company: Company) =>
  (await companyModel.findOneAndUpdate({ _id }, company)).toObject();

export default {
  findById,
  findAll,
  create,
  update,
};
