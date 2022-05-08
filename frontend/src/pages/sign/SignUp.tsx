import { FC } from "react";
import { Link } from "react-router-dom";
import SubmitForm from "../../components/buttons/SubmitForm";
import Form from "../../components/form/SignForm";
import TextInput from "../../components/input/TextInput";
import ErrorMessage from "../../components/messages/ErrorMessage";
import { SignPageProps } from "../../global/types/forms.types";

const SignUp: FC<SignPageProps> = (props) => {
    const { handleInput, handleSubmit, clearForm, errorMessage } = props;
    return (
        <main className="gap-4 base-container">
            <h1 className="text-2xl">MyWallet</h1>
            <Form>
                <TextInput
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleInput}
                    required
                />
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
                <TextInput
                    type="password"
                    placeholder="Confirm Password"
                    name="passwordconfirm"
                    onChange={handleInput}
                    required
                />
                <SubmitForm handleSubmit={handleSubmit} text="Sign Up" />
            </Form>
            <Link to="/signin" onClick={clearForm} className="text-xs font-bold">
                Have an account? Log in
            </Link>
            <ErrorMessage errorMessage={errorMessage} />
        </main>
    );
};

export default SignUp;
