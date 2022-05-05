import { Types } from "mongoose";
import { ITransaction, Transaction } from "../../models/transactions/transaction.model";

export const getTransactions = async (user_id: Types.ObjectId) => {
  try {
    return await Transaction.find({ user_id });
  } catch (err) {
    throw err;
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
