import axios from "axios";
import { ISessionInfo } from "../types/sessionContext.types";
import { ITransaction } from "../types/transactions.types";

const API_URL = process.env.REACT_APP_API_URL;

export const deleteTransaction = (
    sessionInfo: ISessionInfo,
    transactionId: string,
    updateTransactions: () => void
) => {
    if (sessionInfo.userId && window.confirm("Confirm delete?")) {
        axios
            .delete(`${API_URL}/transactions/${transactionId}`, {
                headers: {
                    authorization: `Bearer ${sessionInfo.token}`,
                    user_id: sessionInfo.userId,
                },
            })
            .then(updateTransactions)
            .catch((err) => console.error(err));
    }
};

export const calculateBalance = (transactions: ITransaction[]) =>
    parseFloat(
        transactions
            .reduce((sum, transaction) => {
                const value = parseFloat(transaction.value.replace(",", "."));
                return transaction.isIncome ? sum + value : sum - value;
            }, 0)
            .toFixed(2)
    );
