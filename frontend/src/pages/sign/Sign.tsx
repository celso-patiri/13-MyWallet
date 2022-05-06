import { FC, FormEventHandler, useState } from "react";
import { IFormInput } from "../../global/types";
import { validateFormInput } from "../../utils/forms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const API_URL = process.env.REACT_APP_API_URL;

const baseForm = {
  name: "",
  email: "",
  password: "",
  passwordconfirm: "",
};

type FormInput = IFormInput;
type Props = { signIn: boolean };

const Sign: FC<Props> = (props) => {
  const { signIn } = props;

  const [formInput, setFormInput] = useState<FormInput>({ ...baseForm });
  const clearForm = () => setFormInput({ ...baseForm });

  const handleInput: FormEventHandler<HTMLInputElement> = (e) => {
    const inputInfo = e.currentTarget;
    formInput[inputInfo.name as keyof FormInput] = inputInfo.value;
    setFormInput(formInput);
  };

  const handleSubmit: FormEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const signUrl = `${API_URL}/${signIn ? "signin" : "signup"}`;

    const { error } = validateFormInput(signIn, formInput);
    console.log(error);
    console.log(signUrl);
  };

  return signIn ? (
    <SignIn handleInput={handleInput} handleSubmit={handleSubmit} clearForm={clearForm} />
  ) : (
    <SignUp handleInput={handleInput} handleSubmit={handleSubmit} clearForm={clearForm} />
  );
};

export default Sign;
