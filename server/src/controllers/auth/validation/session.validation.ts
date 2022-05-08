import { NextFunction, Response } from "express";
import Joi from "joi";
import { Types } from "mongoose";
import { TypedRequest } from "../../../global/request.types";
import { findSession } from "../../../services/sessions/sessions.services";

const sessionSchema = Joi.object({
    user_id: Joi.string().required(),
    token: Joi.string().required(),
}).unknown();

export const validateSession = async (
    req: TypedRequest<{ user_id: Types.ObjectId; token: string }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const { user_id } = req.body;
        const validation = req.headers["authorization"];
        const token = validation?.split(" ")[1];

        if (!token) return res.status(401).send({ error: "Missing token authorization header" });

        const existingSession = await findSession(user_id, token);
        if (!existingSession) return res.status(401).send({ error: "Session not active" });

        const { schemaError } = sessionSchema.validate(req.body);
        if (schemaError) return res.status(422).send({ error: schemaError.details[0] });

        res.locals.user_id = user_id;
        next();
    } catch (err) {
        res.status(500).send({ error: err });
    }
};
