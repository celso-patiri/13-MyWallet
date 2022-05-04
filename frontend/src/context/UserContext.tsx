import { createContext, FC, ReactNode } from "react";

interface IUserContext {
  test: boolean;
}

type ProviderProps = {
  children?: ReactNode;
};

export const UserContext = createContext<IUserContext>({ test: true });

export const UserProvider: FC<ProviderProps> = ({ children }) => {
  return <UserContext.Provider value={{ test: true }}>{children}</UserContext.Provider>;
};
