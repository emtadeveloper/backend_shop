import { Schema, model } from "mongoose";
import IOrder from "./IOrder";
import IOrderLine from "./IOrderLine";

const orderLineSchema: Schema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  price: { type: Number, required: true },
  created_at: { type: Date, default: Date.now() },
});
export default model<IOrderLine>("order", orderLineSchema);
