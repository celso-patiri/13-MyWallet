import { Request, Response } from "express";
import sanitizeHtml from "sanitize-html";
import {
    DeleteRequest,
    TransactionRequestBody,
    TypedRequestHeader,
    UpdateRequest,
} from "../../global/request.types";
import {
    createTransaction,
    getTransactions,
    removeTransaction,
    updateTransaction,
} from "../../services/transactions/transactions.services";

const findUserTransactions = async (req: TypedRequestHeader, res: Response) => {
    try {
        const user_id = req.headers["user_id"];
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

const putTransaction = async (req: UpdateRequest, res: Response) => {
    try {
        const _id = req.params.transactionId;

        const newTransaction = req.body;

        const response = await updateTransaction(newTransaction, _id);
        res.status(200).send(response);
    } catch (err) {
        res.send({ error: err });
    }
};

const deleteTransaction = async (req: DeleteRequest, res: Response) => {
    try {
        const user_id = req.headers["user_id"];
        const _id = req.params.transactionId;
        const response = await removeTransaction(user_id, _id);
        res.status(200).send(response);
    } catch (err) {
        res.status(400).send({ error: err });
    }
};

export { findUserTransactions, postTransaction, putTransaction, deleteTransaction };
