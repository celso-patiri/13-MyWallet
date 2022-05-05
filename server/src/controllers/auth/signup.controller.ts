import bcrypt from "bcrypt";
import { Response } from "express";
import sanitizeHtml from "sanitize-html";
import { createSession } from "../../services/sessions/sessions.services";
import { createUser, findUser } from "../../services/users/users.services";
import { TypedRequestBody } from "./request.types";

export const registerUser = async (
  req: TypedRequestBody<{ name: string; email: string; password: string }>,
  res: Response
) => {
  try {
    const existingUser = await findUser(sanitizeHtml(req.body.email));
    if (existingUser) return res.status(409).send({ error: "Email already registered" });

    const newUser = {
      name: sanitizeHtml(req.body.name),
      email: sanitizeHtml(req.body.email),
      password: bcrypt.hashSync(sanitizeHtml(req.body.password), 10),
    };

    const { _id, name, email } = await createUser(newUser);
    const { token } = await createSession(_id);

    res.status(201).send({ name, email, token });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};
