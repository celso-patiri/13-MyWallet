import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const transactionSchema = Joi.object().keys({
  description: Joi.string().min(3).required().messages({
    "string.min": "Description must be at lesat 3 characters long",
    "any.required": "Description is required",
  }),
  income: Joi.boolean().required().messages({
    "string.min": "Description must be at lesat 3 characters long",
    "any.required": "Description is required",
  }),
  date: Joi.date().required().messages({
    "string.min": "Description must be at lesat 3 characters long",
    "any.required": "Description is required",
  }),
});

export const validateTransaction = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;

  const { error } = transactionSchema.validate(data);
  if (error) {
    return res.status(422).send(error.details);
  }

  next();
};
