import {
  ITransaction,
  Transaction,
} from "../../models/transactions/transaction.model";

//TODO: Get transactions
export const getTransactions = async () => {
  try {
    return await Transaction.find({});
  } catch (err) {
    return err;
  }
};

//TODO: createTransaction
export const createTransaction = async (newTransaction: ITransaction) => {
  try {
    return await Transaction.create(newTransaction);
  } catch (err) {
    return err;
  }
};

//TODO: updateTransaction
export const updateTransaction = async (newTransaction: ITransaction) => {
  try {
    return "TODO: updateOne transaction";
  } catch (err) {
    return err;
  }
};

//TODO: deleteTransaction
export const removeTransaction = async () => {
  try {
    return "TODO: deleteTransaction";
  } catch (err) {
    return err;
  }
};
