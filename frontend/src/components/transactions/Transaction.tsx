import dayjs from "dayjs";
import { FC } from "react";
import { Link } from "react-router-dom";

import { ITransaction } from "../../global/types/transactions.types";

const Transaction: FC<ITransaction> = ({
    description,
    value,
    date,
    isIncome,
    _id,
    deleteTransaction,
}) => {
    return (
        <article className="flex justify-between text-xl align-middle">
            <Link to={`/${isIncome ? "income" : "expense"}/update/${_id}`}>
                <div className="flex gap-3 cursor-pointer">
                    <p className="text-base text-gray-400">{dayjs(date).format("DD/MM")}</p>
                    <p className="text-black">{description}</p>
                </div>
            </Link>
            <div className="flex gap-3">
                {isIncome ? (
                    <p className="text-green-500">{value}</p>
                ) : (
                    <p className="text-red-500">{value}</p>
                )}
                <p onClick={() => deleteTransaction()} className="text-gray-400 cursor-pointer">
                    x
                </p>
            </div>
        </article>
    );
};

export default Transaction;
