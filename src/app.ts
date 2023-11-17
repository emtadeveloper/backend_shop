import * as express from "express";
import { Application } from "express";
import Router from "./router";

class App {
  public app: Application;
  public port: number;
  private router: Router;
  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.router = new Router(this.app);
    this.router.run();
  }
  public start(): void {
    const http = require("http");
    const server = http.createServer(this.app);
    server.listen(5000, () => {
      console.log(this.port, "port");
      console.log("app is running ....");
    });
  }
}

export default App;
