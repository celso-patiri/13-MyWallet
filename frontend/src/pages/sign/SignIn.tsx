import { Link } from "react-router-dom";
import { FC } from "react";
import SignForm from "../../components/form/SignForm";
import TextInput from "../../components/input/TextInput";
import SubmitButton from "../../components/submit/SubmitButton";
import ErrorMessage from "../../components/messages/ErrorMessage";
import { SignPageProps } from "../../global/types/forms.types";

const SignIn: FC<SignPageProps> = (props) => {
  const { handleInput, handleSubmit, clearForm, errorMessage } = props;
  return (
    <main className="base-container gap-4">
      <h1 className="text-2xl">MyWallet</h1>
      <SignForm>
        <TextInput type="text" placeholder="E-mail" name="email" onChange={handleInput} required />
        <TextInput
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInput}
          required
        />
        <SubmitButton handleSubmit={handleSubmit} text="Login" />
      </SignForm>
      <Link to="/signup" onClick={clearForm} className="text-xs font-bold">
        Dont't have an account? Sign up
      </Link>
      <ErrorMessage errorMessage={errorMessage} />
    </main>
  );
};

export default SignIn;
