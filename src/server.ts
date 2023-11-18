import App from "./app";
import { config } from "dotenv";
config();
import "../infrastructure/connections/mongoose";

const port: number = 5000;
const application = new App(port);

application.start();
