import { Document } from "mongoose";
import ProductStatus from "./productStatus";
import IProductAttribute from "./IProductAttribute";

export default interface IProduct extends Document {
  title: String;
  sale_price: number;
  price: number;
  thumbnail: string;
  gallery: [string];
  product_category: string;
  attributes: [IProductAttribute];
  create_at: Date;
  update_at: Date;
  status: ProductStatus;
}
