import { NextFunction, Response } from "express";
import Joi from "joi";
import { TransactionRequestBody } from "../../global/request.types";

const transactionSchema = Joi.object()
  .keys({
    description: Joi.string().min(3).required().messages({
      "string.min": "Description must be at least 3 characters long",
      "any.required": "Description is required",
    }),
    income: Joi.boolean().required().messages({
      "any.required": "Income boolean is required",
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
  const { error } = transactionSchema.validate(req.body);
  if (error) return res.status(422).send(error.details[0]);

  next();
};
