import { Request, Response } from "express";
import User from "./model/User";

class UserController {
  constructor() {}
  public async index(req: Request, res: Response) {
    res.send({ Users: [] });
  }
  public async create(req: Request, res: Response) {
    const newUser = await User.create({
      first_name: "emad",
      last_name: "ta",
      email: "emta@gmail.com",
      mobile: "09154144502",
    });
    newUser.addresses.push({
      title: "خانه",
      state: "تهران",
      city: "تهران",
      address: "خیابان فلان کوچه فلان",
      zip_code: "1234567890",
      full_name: "مشتری فلان",
      mobile: "0912123456789",
    });
    await newUser.save();
    res.send({ newUser });
  }
}

export default UserController;
