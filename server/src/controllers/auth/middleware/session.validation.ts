import { NextFunction, Response } from "express";
import Joi from "joi";
import { Types } from "mongoose";
import { TypedRequestBody } from "../../../global/request.types";
import { findSession } from "../../../services/sessions/sessions.services";

const sessionSchema = Joi.object({
  user_id: Joi.string().required(),
  token: Joi.string().required(),
}).unknown();

export const validateSession = async (
  req: TypedRequestBody<{ user_id: Types.ObjectId; token: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error } = sessionSchema.validate(req.body);
    if (error) return res.status(422).send(error.details[0]);

    const { user_id, token } = req.body;
    const existingSession = await findSession(user_id, token);
    if (!existingSession) return res.status(401).send({ error: "Session not active" });

    next();
  } catch (err) {
    res.status(500).send({ error: err });
  }
};
