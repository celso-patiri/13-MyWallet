import { createContext, FC, useState } from "react";
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
    const [sessionInfo, setSessionInfo] = useState<ISessionInfo>(baseSessionInfo);

    return (
        <SessionContext.Provider value={{ sessionInfo, setSessionInfo }}>
            {children}
        </SessionContext.Provider>
    );
};
