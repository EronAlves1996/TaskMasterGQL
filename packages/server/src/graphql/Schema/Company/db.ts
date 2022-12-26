import { model, Schema } from "mongoose";
import { DOMAIN_NAME } from "./definitions";

const schema = new Schema({
  id: Schema.Types.ObjectId,
  name: Schema.Types.String,
});

const modelCreated = model(DOMAIN_NAME, schema);

export default {
  findById: modelCreated.findById,
  findAll: modelCreated.find,
  create: modelCreated.create,
  update: modelCreated.updateOne,
};
