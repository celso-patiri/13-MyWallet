export interface ISessionInfo {
    userId: string | null;
    token: string | null;
    name: string | null;
}

export type ISessionContext = {
    setSessionInfo: React.Dispatch<React.SetStateAction<ISessionInfo>>;
    sessionInfo: ISessionInfo;
    logOut: () => void;
};

export type ProviderProps = {
    children: React.ReactNode;
};
