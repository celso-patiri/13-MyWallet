import bcrypt from "bcrypt";
import { Response } from "express";
import sanitizeHtml from "sanitize-html";
import { TypedRequestBody } from "../../global/request.types";
import { createSession } from "../../services/sessions/sessions.services";
import { createUser, findUser } from "../../services/users/users.services";

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
    res.status(201).send({ name, email, token, user_id: _id });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

export const authenticateUser = async (
  req: TypedRequestBody<{ email: string; password: string }>,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const user = await findUser(sanitizeHtml(email));
    if (!user) return res.status(409).send({ error: "Email not registered" });

    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).send({ error: "Wrong password" });

    const { token } = await createSession(user._id);
    res.status(201).send({ user_id: user._id, token });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const signUserIn = async (
  req: TypedRequestBody<{ email: string; password: string }>,
  res: Response
) => {};
