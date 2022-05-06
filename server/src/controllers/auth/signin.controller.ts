import bcrypt from "bcrypt";
import { Response } from "express";
import sanitizeHtml from "sanitize-html";
import { TypedRequestBody } from "../../global/request.types";
import { createSession } from "../../services/sessions/sessions.services";
import { findUser } from "../../services/users/users.services";

export const logUserIn = async (
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
