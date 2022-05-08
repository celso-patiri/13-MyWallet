import { Link } from "react-router-dom";
import { FC } from "react";
import Form from "../../components/form/SignForm";
import TextInput from "../../components/input/TextInput";
import ErrorMessage from "../../components/messages/ErrorMessage";
import { SignPageProps } from "../../global/types/forms.types";
import SubmitForm from "../../components/buttons/SubmitForm";

const SignIn: FC<SignPageProps> = (props) => {
    const { handleInput, handleSubmit, clearForm, errorMessage } = props;
    return (
        <main className="gap-4 base-container">
            <h1 className="text-2xl">MyWallet</h1>
            <Form>
                <TextInput
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleInput}
                    required
                />
                <TextInput
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInput}
                    required
                />
                <SubmitForm handleSubmit={handleSubmit} text="Login" />
            </Form>
            <Link to="/signup" onClick={clearForm} className="text-xs font-bold">
                Dont't have an account? Sign up
            </Link>
            <ErrorMessage errorMessage={errorMessage} />
        </main>
    );
};

export default SignIn;
