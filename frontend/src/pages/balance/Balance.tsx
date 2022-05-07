import { FC, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
        <main className="base-container gap-3 px-5 pb-5">
            <div className="my-4 flex w-full">
                <h2 className="self-start text-2xl font-bold">Hi, {name}</h2>
            </div>
            <section className="h-full w-full rounded bg-white"></section>
            <section className="flex h-32 w-full gap-3">
                <AddTransaction text="New income" income={true} />
                <AddTransaction text="New expense" income={false} />
            </section>
        </main>
    );
};

export default Balance;
