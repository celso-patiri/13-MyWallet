import { createContext, FC, useState } from "react";
import { ISessionContext, ISessionInfo, ProviderProps } from "../global/types/sessionContext.types";

const baseInfo = {
  userId: null,
  token: null,
};

export const SessionContext = createContext<ISessionContext>({
  sessionInfo: baseInfo,
  setSessionInfo: () => true,
});

export const SessionProvider: FC<ProviderProps> = ({ children }) => {
  const [sessionInfo, setSessionInfo] = useState<ISessionInfo>({ userId: null, token: null });

  return (
    <SessionContext.Provider value={{ sessionInfo, setSessionInfo }}>
      {children}
    </SessionContext.Provider>
  );
};
