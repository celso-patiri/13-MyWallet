import { Request, Response } from "express";
import { findUser } from "../../services/users/users.services";

export const logUserIn = async (req: Request, res: Response) => {
  const existingUser = await findUser();

  res.send("/TODO: logUserIn");
};
