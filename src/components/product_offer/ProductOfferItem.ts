import { Schema } from "mongoose";

const productOfferItemSchema: Schema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "product" },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

export default productOfferItemSchema;
