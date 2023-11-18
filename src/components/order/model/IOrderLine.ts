import { Document } from "mongoose";

export default interface IOrderLine extends Document {
  price: number;
  peoduct: object;
  created_at: Date;
}
