import Joi from "joi";
import { IFormInput } from "../global/types";

const formSchema = Joi.object({
  name: Joi.string().min(2).messages({ "string.min": "Name must be at least 2 characters long" }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({ "string.email": "Not a valid email format" }),
  password: Joi.string().min(4).required().messages({
    "string.min": "Password must be at least 4 characters long",
  }),
});

export const validateFormInput = (signIn: boolean, formInput: IFormInput) => {
  const { name, email, password, passwordconfirm } = formInput;

  if (!signIn && password !== passwordconfirm) return { error: "Passwords must match" };

  return formSchema.validate({ name, email, password });
};
