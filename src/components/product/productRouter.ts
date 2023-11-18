import { Router } from "express";
import ProductsrController from "./products.controller";

const ProductsrControllerInstance = new ProductsrController();
const ProductsRouter: Router = Router();
ProductsRouter.get("/", ProductsrControllerInstance.index);

export default ProductsRouter;
