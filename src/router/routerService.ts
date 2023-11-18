import { Application, Router } from "express";
import userRouter from "../components/users/userRouter";
import productsRouter from "../components/product/productRouter";
import RouterEngine from "./router";

class RouterService {
  private app: Application;
  private router: RouterEngine;
  public constructor(app: Application) {
    this.app = app;
    this.router = new RouterEngine();
    this.bindRouter();
  }
  public bindRouter() {
    this.router.registerRouter("/api/v1/users", userRouter);
    this.router.registerRouter("/api/v1/products", productsRouter);
  }

  public run() {
    this.router.getRouters().forEach((router: Router, route: string) => {
      this.app.use(route, router);
    });
  }
}
export default RouterService;
