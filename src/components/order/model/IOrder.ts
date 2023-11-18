import { Document } from "mongoose";
import orderStatus from "./OrderStatus";

export default interface IOrder extends Document {
  user: Object;
  total_price: number;
  coupon: object;
  final_price: number;
  status: orderStatus;
  order_lines: [object];
  created_at: Date;
  update_At: Date;
}
