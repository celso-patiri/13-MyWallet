import axios from "axios";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddTransaction from "../../components/buttons/AddTransaction";
import Transaction from "../../components/transactions/Transaction";
import { SessionContext } from "../../context/SessionContext";
import { ITransaction } from "../../global/types/transactions.types";

const API_URL = process.env.REACT_APP_API_URL;

const Balance: FC = () => {
    const navigate = useRef(useNavigate());

    const { sessionInfo } = useContext(SessionContext);
    const { name } = sessionInfo;

    const [transactions, setTransactions] = useState<ITransaction[]>();

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
    }, [sessionInfo.token, sessionInfo.userId]);

    return (
        <>
            <main className="gap-3 px-5 pb-5 base-container">
                <div className="flex justify-between py-3 mt-3 w-full">
                    <h2 className="self-start text-2xl font-bold">Hi, {name}</h2>
                    <img src="logout.svg" alt="logout" />
                </div>
                <section className="p-3 w-full h-full bg-white rounded">
                    {transactions
                        ? transactions.map((entry) => {
                              return (
                                  <Transaction
                                      description={entry.description}
                                      isIncome={entry.isIncome}
                                      value={entry.value}
                                      date={entry.date}
                                      _id={entry._id}
                                      key={entry._id}
                                  />
                              );
                          })
                        : "eae"}
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
