import { Request, Response } from "express";
import User from "./model/User";

class UserController {
  constructor() {}
  public index(req: Request, res: Response) {
    res.send({ allUser: [] });
  }
  public async create(req: Request, res: Response) {
    const newUser = await User.create({
      first_name: "emad",
      last_name: "ta",
      email: "emta@gmail.com",
      mobile: "09154144502",
    });
    res.send({ newUser });
  }
}

export default UserController;
