import { FC } from "react";

type Props = {
    text: string;
    income: boolean;
};

const AddTransaction: FC<Props> = ({ text, income }) => {
    return (
        <div className="flex flex-col justify-between p-2 w-full rounded shadow-sm cursor-pointer bg-secondary hover:scale-101">
            <img src={income ? "plus.svg" : "minus.svg"} className="w-5" alt="+" />
            <h3 className="w-4 text-sm font-bold">{text}</h3>
        </div>
    );
};
export default AddTransaction;
