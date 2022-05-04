import { FormEventHandler } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  required: boolean;
  onChange: FormEventHandler;
};

const TextInput = (props: InputProps) => {
  const { type, placeholder, onChange, name, required } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      required={required}
      className="rounded py-1 px-2 text-sm shadow-sm"
    />
  );
};

export default TextInput;
