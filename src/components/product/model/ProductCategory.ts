import { model, Schema } from "mongoose";
import IProductCategory from "./IProductCategory";

const ProductCategorySchma: Schema = new Schema({
  title: { type: String, require: true },
  totla_products: { type: Number, default: 0 },
  attributes: { type: [Object] },
});

export default model<IProductCategory>("product", ProductCategorySchma);
