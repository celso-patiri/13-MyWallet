import { Request, Response } from "express";
import { createUser, findUser } from "../../services/users/users.services";

// TODO: RegisterUser
export const registerUser = async (req: Request, res: Response) => {
  const existingUser = await findUser();

  if (!existingUser) {
    const response = await createUser();
  }

  res.send("TODO: RegisterUser");
};
