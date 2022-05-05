import bcrypt from "bcrypt";
import { Response } from "express";
import { createUser, findUser } from "../../services/users/users.services";
import { TypedRequestBody } from "./request.types";
import sanitizeHtml from "sanitize-html";

export const registerUser = async (
  req: TypedRequestBody<{ name: string; email: string; password: string }>,
  res: Response
) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await findUser(sanitizeHtml(email));

    if (existingUser) return res.status(409).send({ error: "Email already registered" });

    const newUser = {
      name: sanitizeHtml(name),
      email: sanitizeHtml(email),
      password: bcrypt.hashSync(sanitizeHtml(password), 10),
    };

    const registerResponse = await createUser(newUser);

    res.status(201).send(registerResponse);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};
