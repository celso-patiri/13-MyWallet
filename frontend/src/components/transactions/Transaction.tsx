import dayjs from "dayjs";
import { FC } from "react";

import { ITransaction } from "../../global/types/transactions.types";

const Transaction: FC<ITransaction> = ({ description, value, date, isIncome }) => {
    return (
        <article className="flex justify-between text-lg align-middle">
            <div className="flex gap-3">
                <p className="text-base text-gray-300">{dayjs(date).format("DD/MM")}</p>
                <p className="text-black">{description}</p>
            </div>
            <div className="flex gap-3">
                {isIncome ? (
                    <p className="text-green-500">{value}</p>
                ) : (
                    <p className="text-red-500">{value}</p>
                )}
                <p className="font-bold text-gray-400">x</p>
            </div>
        </article>
    );
};

export default Transaction;
