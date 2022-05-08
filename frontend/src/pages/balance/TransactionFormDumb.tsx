import { FC, FormEventHandler } from "react";
import SubmitForm from "../../components/buttons/SubmitForm";
import TextInput from "../../components/input/TextInput";
import ErrorMessage from "../../components/messages/ErrorMessage";
import { FormError } from "../../global/types/forms.types";

type Props = {
    action: string;
    type: string;
    handleInput: FormEventHandler;
    handleSubmit: FormEventHandler;
    errorMessage: FormError;
};

const TransactionFormDumb: FC<Props> = ({
    action,
    type,
    handleInput,
    handleSubmit,
    errorMessage,
}) => {
    return (
        <main className="gap-4 justify-start p-5 base-container">
            <h2 className="self-start text-2xl font-bold">
                {action} {type}
            </h2>
            <form className="flex flex-col gap-2 items-center w-full h-1/3 text-black">
                <TextInput
                    type="text"
                    name="value"
                    placeholder="Value"
                    onChange={handleInput}
                    required
                />
                <TextInput
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={handleInput}
                    required
                />
                <SubmitForm
                    text={`${action === "New" ? "Save" : "Update"} ${type}`}
                    handleSubmit={handleSubmit}
                />
            </form>
            <ErrorMessage errorMessage={errorMessage} />
        </main>
    );
};

export default TransactionFormDumb;
