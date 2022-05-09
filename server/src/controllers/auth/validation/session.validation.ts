import { NextFunction, Response } from "express";
import Joi from "joi";
import { Types } from "mongoose";
import { TypedRequest, TypedRequestHeader } from "../../../global/request.types";
import { findSession } from "../../../services/sessions/sessions.services";

const sessionSchema = Joi.object({
    user_id: Joi.string().required(),
    token: Joi.string().required(),
}).unknown();

export const validateHeader = async (
    req: TypedRequestHeader,
    res: Response,
    next: NextFunction
) => {
    const validation = req.headers["authorization"];
    const token = validation?.split(" ")[1];

    if (!validation || token === "null")
        return res.status(401).send({ error: "Missing token authorization header" });

    next();
};

export const validateSession = async (
    req: TypedRequest<{ user_id: Types.ObjectId; token: string }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const validation = req.headers["authorization"];
        const token = validation?.split(" ")[1];

        if (!token || token === "null")
            return res.status(401).send({ error: "Missing token authorization header" });

        const { user_id } = req.body;

        const existingSession = await findSession(user_id, token);
        if (!existingSession) return res.status(401).send({ error: "Session not active" });

        const { error } = sessionSchema.validate(req.body);
        if (error) return res.status(422).send({ error: error.details[0] });

        res.locals.user_id = user_id;
        next();
    } catch (err) {
        res.status(500).send({ error: err });
    }
};
