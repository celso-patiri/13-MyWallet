import Joi from "joi";
import axios from "axios";
import { IFormInput, ITransactionInput } from "../types/forms.types";
import { ISessionInfo } from "../types/sessionContext.types";

const API_URL = process.env.REACT_APP_API_URL;

const signFormSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({ "string.email": "Not a valid email format" }),
    password: Joi.string().min(4).required().messages({
        "string.min": "Password must be at least 4 characters long",
    }),
});

export const validateSignFormInput = (isSignIn: boolean, formInput: IFormInput) => {
    const { name, email, password, passwordconfirm } = formInput;

    if (!isSignIn && password !== passwordconfirm) return "Passwords must match";
    if (!isSignIn && name?.length === 1) return "Name must be at least two characters long";

    const { error } = signFormSchema.validate({ email, password });
    return error?.message;
};

export const submitSignForm = async (isSignIn: boolean, formInput: IFormInput) => {
    const signUrl = `${API_URL}/auth/${isSignIn ? "signin" : "signup"}`;
    return axios
        .post(signUrl, formInput)
        .then((res) => res.data)
        .catch((err) => err.response.data);
};

const transactionFormSchema = Joi.object({
    value: Joi.string()
        .pattern(/^([0-9]{0,5},[0-9]{1,2})$|^([0-9]*)$/)
        .required()
        .messages({ "string.pattern": "Value must be a valid number" }),
});

export const validateTransactionFormInput = (formInput: ITransactionInput) => {
    const { value } = formInput;
    const { error } = transactionFormSchema.validate({ value });
    return error?.details[0].message;
};

export const submitTransactionForm = async (
    isIncome: boolean,
    transactionInfo: ITransactionInput,
    sessionInfo: ISessionInfo
) => {
    const { value, description } = transactionInfo;
    return axios
        .post(
            `${API_URL}/transactions`,
            {
                value,
                description,
                isIncome,
                date: Date.now(),
                user_id: sessionInfo.userId,
                token: sessionInfo.token,
            },
            { headers: { authorization: `Bearer ${sessionInfo.token}` } }
        )
        .then((res) => res.data)
        .catch((err) => err.response.data);
};
