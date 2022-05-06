import { FC, FormEventHandler, useContext, useState } from "react";
import { SessionContext } from "../../context/SessionContext";
import { FormError, IFormInput } from "../../global/types/forms.types";
import { submitForm, validateFormInput } from "../../global/utils/forms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
  const { setSessionInfo } = useContext(SessionContext);

  const [formInput, setFormInput] = useState<FormInput>({ ...baseForm });
  const [errorMessage, setErrorMessage] = useState<FormError>();

  const clearForm = () => setFormInput({ ...baseForm });

  const handleInput: FormEventHandler<HTMLInputElement> = (e) => {
    const inputInfo = e.currentTarget;
    formInput[inputInfo.name as keyof FormInput] = inputInfo.value;
    setFormInput(formInput);
  };

  const handleSubmit: FormEventHandler<HTMLInputElement> = async (e) => {
    e.preventDefault();
    const formError = validateFormInput(signIn, formInput);
    if (formError) return setErrorMessage(formError);

    const { user_id, token, error } = await submitForm(signIn, formInput);
    if (error) return setErrorMessage(error);

    setSessionInfo({ userId: user_id, token });
  };

  return signIn ? (
    <SignIn
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      clearForm={clearForm}
      errorMessage={errorMessage}
    />
  ) : (
    <SignUp
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      clearForm={clearForm}
      errorMessage={errorMessage}
    />
  );
};

export default Sign;
