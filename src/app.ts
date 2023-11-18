import * as express from "express";
import { Application } from "express";
import RouterService from "./router/routerService";
class App {
  public app: Application;
  public port: number;
  private router: RouterService;
  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.router = new RouterService(this.app);
    this.router.run();
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log("app is running ....");
    });
  }
}

export default App;
