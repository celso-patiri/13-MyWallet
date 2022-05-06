import { Link } from "react-router-dom";
import { FC } from "react";
import SignForm from "../../components/form/SignForm";
import TextInput from "../../components/input/TextInput";
import { SignPageProps } from "../../global/types";
import SubmitButton from "../../components/submit/SubmitButton";

const SignIn: FC<SignPageProps> = (props) => {
  const { handleInput, handleSubmit, clearForm } = props;
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
    </main>
  );
};

export default SignIn;
