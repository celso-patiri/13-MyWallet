export interface ITransaction {
    date: Date;
    description: string;
    value: string;
    isIncome: boolean;
    _id: string;
    deleteTransaction: () => void;
}
