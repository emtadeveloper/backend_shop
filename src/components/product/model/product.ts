import { model, Schema } from "mongoose";
import IProduct from "./IProduct";
import ProductStatus from "./productStatus";

const productSchema: Schema = new Schema({
  title: { type: String, require: true },
  price: { type: Number, require: true },
  sale_price: { type: Number, default: 0 },
  thumbnail: { type: String },
  gallery: { type: [String] },
  product_category: { type: Schema.Types.ObjectId, ref: "ProductCategory" },
  attributes: { type: [Object], require: true },
  create_at: { type: Date, default: Date.now() },
  update_at: { type: Date, default: Date.now() },
  status: { type: ProductStatus, default: ProductStatus.INT },
});

export default model<IProduct>("product", productSchema);
