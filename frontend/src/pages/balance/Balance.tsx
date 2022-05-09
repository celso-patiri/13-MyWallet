import axios from "axios";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddTransaction from "../../components/buttons/AddTransaction";
import Transaction from "../../components/transactions/Transaction";
import { SessionContext } from "../../context/SessionContext";
import { ITransaction } from "../../global/types/transactions.types";
import { calculateBalance, deleteTransaction } from "../../global/utils/transactions";

const API_URL = process.env.REACT_APP_API_URL;

const Balance: FC = () => {
    const navigate = useRef(useNavigate());

    const { sessionInfo, logOut } = useContext(SessionContext);
    const { name } = sessionInfo;

    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    const [refresh, setRefresh] = useState(false);
    const updateTransactions = () => setRefresh(!refresh);

    useEffect(() => {
        if (!sessionInfo.token) navigate.current("/signin");
    }, [sessionInfo.token]);

    useEffect(() => {
        if (sessionInfo.userId) {
            axios
                .get(`${API_URL}/transactions`, {
                    headers: {
                        authorization: `Bearer ${sessionInfo.token}`,
                        user_id: sessionInfo.userId,
                    },
                })
                .then(({ data }) => setTransactions(data))
                .catch((err) => console.error(err));
        }
    }, [sessionInfo.token, sessionInfo.userId, refresh]);

    const total = calculateBalance(transactions);

    return (
        <>
            <main className="gap-3 px-5 pb-5 base-container">
                <div className="flex justify-between py-3 mt-3 w-full">
                    <h2 className="self-start text-2xl font-bold">Hi, {name}</h2>
                    <img
                        onClick={logOut}
                        src="logout.svg"
                        alt="logout"
                        className="cursor-pointer"
                    />
                </div>
                <section className="flex flex-col justify-between p-3 w-full h-full bg-white rounded">
                    <div className="flex flex-col w-full h-full">
                        {transactions.length > 0 ? (
                            transactions.map((entry) => {
                                return (
                                    <Transaction
                                        description={entry.description}
                                        isIncome={entry.isIncome}
                                        value={entry.value}
                                        date={entry.date}
                                        _id={entry._id}
                                        deleteTransaction={() =>
                                            deleteTransaction(
                                                sessionInfo,
                                                entry._id,
                                                updateTransactions
                                            )
                                        }
                                        key={entry._id}
                                    />
                                );
                            })
                        ) : (
                            <p className="m-auto text-2xl text-center text-gray-400">
                                There are no income or expense transactions registered
                            </p>
                        )}
                    </div>
                    {transactions.length > 0 && (
                        <div className="flex justify-between">
                            <p className="font-bold text-black">BALANCE</p>
                            <p
                                className={`${
                                    total > 0 ? "text-green-400" : "text-red-500"
                                } text-2xl`}
                            >
                                {total}
                            </p>
                        </div>
                    )}
                </section>
                <section className="flex gap-3 w-full h-32">
                    <Link to="/income/new" className="w-full">
                        <AddTransaction text="New income" income={true} />
                    </Link>
                    <Link to="/expense/new" className="w-full">
                        <AddTransaction text="New expense" income={false} />
                    </Link>
                </section>
            </main>
        </>
    );
};

export default Balance;
