import { Request, Response } from "express";
import { Types } from "mongoose";
import sanitizeHtml from "sanitize-html";
import { TransactionRequestBody, TypedRequest } from "../../global/request.types";
import {
    createTransaction,
    getTransactions,
    removeTransaction,
} from "../../services/transactions/transactions.services";

const findUserTransactions = async (
    req: TypedRequest<{ user_id: Types.ObjectId }>,
    res: Response
) => {
    try {
        const { user_id } = req.body;
        const response = await getTransactions(user_id);
        res.status(200).send(response);
    } catch (err) {
        res.status(400).send({ error: err });
    }
};

const postTransaction = async (req: TransactionRequestBody, res: Response) => {
    try {
        const response = await createTransaction({
            ...req.body,
            description: sanitizeHtml(req.body.description),
        });
        res.status(201).send(response);
    } catch (err) {
        res.status(400).send({ error: err });
    }
};

// TODO: update Transaction
const putTransaction = async (req: Request, res: Response) => {
    try {
        // const response = await updateTransaction({ });
        // res.send(response);
    } catch (err) {
        res.send({ error: err });
    }
};

// TODO: delete transaction
const deleteTransaction = async (req: Request, res: Response) => {
    try {
        const response = await removeTransaction();
        res.send(response);
    } catch (err) {
        res.send({ error: err });
    }
};

export { findUserTransactions, postTransaction, putTransaction, deleteTransaction };
