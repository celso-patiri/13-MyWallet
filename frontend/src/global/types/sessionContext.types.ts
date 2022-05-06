export interface ISessionInfo {
  userId: string | null;
  token: string | null;
}

export type ISessionContext = {
  setSessionInfo: React.Dispatch<React.SetStateAction<ISessionInfo>>;
  sessionInfo: ISessionInfo;
};

export type ProviderProps = {
  children: React.ReactNode;
};
