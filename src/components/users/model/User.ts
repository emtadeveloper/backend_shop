import { Schema, model } from "mongoose";
import IUser from "./IUser";

const userShema: Schema = new Schema({
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  mobile: { type: String, require: true, unique: true },
  total_orders: { type: Number, default: 0 },
  wallet: { type: Number, default: 0 },
  create_at: { type: Date, default: Date.now() },
});
export default model<IUser>("user", userShema);
