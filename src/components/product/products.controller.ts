import { Request, Response } from "express";

class ProductsrController {
  constructor() {}
  public index(req: Request, res: Response) {
    res.send({ allUser: [] });
  }
}

export default ProductsrController;
