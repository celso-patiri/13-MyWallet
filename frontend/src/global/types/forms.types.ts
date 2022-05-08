import { FormEventHandler } from "react";

export interface IFormInput {
    email: string;
    password: string;
    name?: string;
    passwordconfirm?: string;
}

export type SignPageProps = {
    handleInput: FormEventHandler;
    handleSubmit: FormEventHandler;
    clearForm: () => void;
    errorMessage?: FormError;
};

export type SubmitProps = {
    handleSubmit: FormEventHandler;
    text: string;
};

export interface ITransactionInput {
    value: string;
    description: string;
}

export type FormError = string | undefined;
