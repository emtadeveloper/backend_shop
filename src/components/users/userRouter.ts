import { Router } from "express";
import UserController from "./users.controller";

const UserControllerInstance = new UserController();
const userRouter: Router = Router();
userRouter.get("/", UserControllerInstance.index);
userRouter.post("/", UserControllerInstance.create);

export default userRouter;
