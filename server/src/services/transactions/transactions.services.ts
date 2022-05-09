import { Types } from "mongoose";
import {
    ITransaction,
    IUpdateTransaction,
    Transaction,
} from "../../models/transactions/transaction.model";

export const getTransactions = async (user_id?: Types.ObjectId) => {
    try {
        return await Transaction.find({ user_id });
    } catch (err) {
        throw err;
    }
};

export const createTransaction = async (newTransaction: ITransaction) => {
    try {
        return await Transaction.create(newTransaction);
    } catch (err) {
        throw err;
    }
};

export const updateTransaction = async (
    newTransaction: IUpdateTransaction,
    _id: Types.ObjectId
) => {
    try {
        return await Transaction.updateOne({ _id }, newTransaction);
    } catch (err) {
        return err;
    }
};

export const removeTransaction = async (user_id?: Types.ObjectId, _id?: Types.ObjectId) => {
    try {
        return await Transaction.deleteOne({ user_id, _id });
    } catch (err) {
        return err;
    }
};
