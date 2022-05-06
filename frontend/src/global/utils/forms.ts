import Joi from "joi";
import axios from "axios";
import { IFormInput } from "../types/forms.types";

const API_URL = process.env.REACT_APP_API_URL;

const formSchema = Joi.object({
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

  if (!signIn && password !== passwordconfirm) return "Passwords must match";
  if (!signIn && name?.length === 1) return "Name must be at least two characters long";

  const { error } = formSchema.validate({ email, password });
  return error?.message;
};

export const submitForm = async (signIn: boolean, formInput: IFormInput) => {
  const signUrl = `${API_URL}/auth/${signIn ? "signin" : "signup"}`;
  return axios
    .post(signUrl, formInput)
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
