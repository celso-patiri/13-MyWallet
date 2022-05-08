import { createContext, FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISessionContext, ISessionInfo, ProviderProps } from "../global/types/sessionContext.types";

const baseSessionInfo = {
    userId: null,
    token: null,
    name: null,
};

export const SessionContext = createContext<ISessionContext>({
    sessionInfo: baseSessionInfo,
    setSessionInfo: () => true,
});

export const SessionProvider: FC<ProviderProps> = ({ children }) => {
    const navigate = useRef(useNavigate());
    const [sessionInfo, setSessionInfo] = useState<ISessionInfo>(baseSessionInfo);

    useEffect(() => {
        if (!sessionInfo.token) navigate.current("/signin");
    }, [sessionInfo.token]);

    return (
        <SessionContext.Provider value={{ sessionInfo, setSessionInfo }}>
            {children}
        </SessionContext.Provider>
    );
};
