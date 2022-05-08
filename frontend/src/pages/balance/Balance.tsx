import { FC, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddTransaction from "../../components/buttons/AddTransaction";
import { SessionContext } from "../../context/SessionContext";

const Balance: FC = () => {
    const navigate = useRef(useNavigate());

    const { sessionInfo } = useContext(SessionContext);
    const { name } = sessionInfo;

    useEffect(() => {
        if (!sessionInfo.token) navigate.current("/signin");
    }, [sessionInfo.token]);

    return (
        <>
            <main className="gap-3 px-5 pb-5 base-container">
                <div className="flex my-4 w-full">
                    <h2 className="self-start text-2xl font-bold">Hi, {name}</h2>
                </div>
                <section className="w-full h-full bg-white rounded"></section>
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
