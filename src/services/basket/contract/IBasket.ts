import IProduct from "src/components/product/model/IProduct";

export default interface IBasket {
  add(product: IProduct): void;
  remove(product: IProduct): void;
  item(): Promise<IProduct[]>;
  count(): Promise<number>;
  clear(): void;
  total(): Promise<number>;
  has(product: IProduct): Promise<boolean>;
}
