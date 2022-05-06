import { FC } from "react";
import { SubmitProps } from "../../global/types";

const SubmitButton: FC<SubmitProps> = (props) => {
  const { handleSubmit, text } = props;
  return (
    <button
      onClick={handleSubmit}
      className="bg-secondary text-md w-full rounded px-2 text-white shadow-sm"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
