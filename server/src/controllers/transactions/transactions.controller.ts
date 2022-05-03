import { Request, Response } from "express";
import {
  getTransactions,
  createTransaction,
  updateTransaction,
  removeTransaction,
} from "../../services/transactions/transactions.services";

// TODO: getUserTransactions
const findUserTransactions = async (req: Request, res: Response) => {
  try {
    const response = await getTransactions();
    res.send(response);
  } catch (err) {
    res.send(err);
  }
};

// TODO: postTransaction
const postTransaction = async (req: Request, res: Response) => {
  try {
    const response = await createTransaction({
      date: new Date(),
      income: true,
      description: "my transaction",
    });
    res.send(response);
  } catch (err) {
    res.send(err);
  }
};

// TODO: update Transaction
const putTransaction = async (req: Request, res: Response) => {
  try {
    const response = await updateTransaction({
      date: new Date(),
      income: true,
      description: "my transaction",
    });
    res.send(response);
  } catch (err) {
    res.send(err);
  }
};

// TODO: delete transaction
const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const response = await removeTransaction();
    res.send(response);
  } catch (err) {
    res.send(err);
  }
};

export {
  findUserTransactions,
  postTransaction,
  putTransaction,
  deleteTransaction,
};
