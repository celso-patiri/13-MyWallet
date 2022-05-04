import { FC, FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import SignForm from "../../components/form/SignForm";
import TextInput from "../../components/input/TextInput";

interface IFormInput {
  name: string | null;
  email: string | null;
  password: string | null;
  passwordconfirm: string | null;
}

const SignUp: FC = () => {
  const [formInput, setFormInput] = useState<IFormInput>({
    name: "",
    email: "",
    password: "",
    passwordconfirm: "",
  });

  const handleInput: FormEventHandler<HTMLInputElement> = (e) => {
    const inputInfo = e.currentTarget;
    formInput[inputInfo.name as keyof IFormInput] = inputInfo.value;
    setFormInput(formInput);
  };

  return (
    <main className="base-container gap-4">
      <h1 className="text-2xl">MyWallet</h1>
      <SignForm>
        <TextInput type="text" placeholder="Name" name="name" onChange={handleInput} required />
        <TextInput type="text" placeholder="E-mail" name="email" onChange={handleInput} required />
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
        <button className="bg-secondary text-md w-full rounded px-2 text-white shadow-sm">
          Sign Up
        </button>
      </SignForm>
      <Link to="/signin" className="text-xs font-bold">
        Have an account? Log in
      </Link>
    </main>
  );
};

export default SignUp;
