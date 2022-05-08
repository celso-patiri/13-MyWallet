import { FC } from "react";
import { SubmitProps } from "../../global/types/forms.types";

const SubmitForm: FC<SubmitProps> = (props) => {
    const { handleSubmit, text } = props;
    return (
        <button
            onClick={handleSubmit}
            className="px-2 w-full h-full font-bold text-white rounded shadow-sm bg-secondary text-md"
        >
            {text}
        </button>
    );
};

export default SubmitForm;
