import { FC, FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import SignForm from "../../components/form/SignForm";
import TextInput from "../../components/input/TextInput";

interface IFormInput {
  email: string | null;
  password: string | null;
}

const SignIn: FC = () => {
  const [formInput, setFormInput] = useState<IFormInput>({
    email: "",
    password: "",
  });

  const handleInput: FormEventHandler<HTMLInputElement> = (e) => {
    const inputInfo = e.currentTarget;
    formInput[inputInfo.name as keyof IFormInput] = inputInfo.value;
    setFormInput(formInput);
  };

  return (
    <main className="base-container gap-4">
      <h1 className="font-saira text-2xl">MyWallet</h1>
      <SignForm>
        <TextInput type="text" placeholder="E-mail" name="email" onChange={handleInput} required />
        <TextInput
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInput}
          required
        />
        <button className="bg-secondary text-md w-full rounded px-2 text-white shadow-sm">
          Login
        </button>
      </SignForm>
      <Link to="/signup" className="text-xs font-bold">
        Dont't have an account? Sign up
      </Link>
    </main>
  );
};

export default SignIn;
