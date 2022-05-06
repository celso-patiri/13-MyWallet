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
  clearForm(): void;
};

export type SubmitProps = {
  handleSubmit: FormEventHandler;
  text: string;
};
