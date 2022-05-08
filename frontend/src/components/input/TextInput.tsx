import { FormEventHandler, FC } from "react";

type InputProps = {
    type: string;
    placeholder: string;
    name: string;
    required: boolean;
    onChange: FormEventHandler;
};

const TextInput: FC<InputProps> = ({ type, placeholder, onChange, name, required }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            required={required}
            className="py-1 px-2 w-full h-full text-sm rounded shadow-sm"
        />
    );
};

export default TextInput;
