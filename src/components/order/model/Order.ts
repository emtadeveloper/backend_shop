import { Schema, model } from "mongoose";
import IOrder from "./IOrder";
import orderStatus from "./OrderStatus";
import orderLineSchema from "./orderLine";

const orderSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  total_price: { type: Number, required: true },
  coupon: { type: Object, default: null },
  final_price: { type: Number, required: true },
  order_lines : {type : [orderLineSchema]},
  status: { type: orderStatus, required: true, default: orderStatus.INIT },
  created_at: { type: Date, default: Date.now() },
  update_At: { type: Date, default: Date.now() },
});
export default model<IOrder>("order", orderSchema);
