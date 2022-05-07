import { FC, FormEventHandler, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
type Props = { isSignIn: boolean };

const Sign: FC<Props> = ({ isSignIn }) => {
    const { sessionInfo, setSessionInfo } = useContext(SessionContext);
    const navigate = useRef(useNavigate());

    useEffect(() => {
        if (sessionInfo.token) navigate.current("/balance");
    }, [sessionInfo.token]);

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
        const formError = validateFormInput(isSignIn, formInput);
        if (formError) return setErrorMessage(formError);

        const { user_id, token, name, error } = await submitForm(isSignIn, formInput);
        if (error) return setErrorMessage(error);

        setSessionInfo({ userId: user_id, token, name });
    };

    return isSignIn ? (
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
