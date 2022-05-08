import { NextFunction, Response } from "express";
import Joi from "joi";
import { TransactionRequestBody } from "../../global/request.types";

const transactionSchema = Joi.object()
    .keys({
        value: Joi.string()
            .pattern(/^([0-9]{0,5},[0-9]{1,2})|([0-9]*)$/)
            .required()
            .messages({ "string.pattern": "Value must be a valid number" }),
        description: Joi.string().min(3).required().messages({
            "string.min": "Description must be at least 3 characters long",
            "any.required": "Description is required",
        }),
        isIncome: Joi.boolean().required().messages({
            "any.required": "isIncome boolean is required",
        }),
        date: Joi.date().required().messages({
            "any.required": "Date is required",
        }),
    })
    .unknown();

export const validateTransaction = async (
    req: TransactionRequestBody,
    res: Response,
    next: NextFunction
) => {
    const { schemaError } = transactionSchema.validate(req.body);
    if (schemaError) return res.status(422).send(schemaError.details[0]);

    next();
};
