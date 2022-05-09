import { Router } from "express";
import {
    validateHeader,
    validateSession,
} from "../../controllers/auth/validation/session.validation";
import {
    validateTransaction,
    validateTransactionUpdate,
} from "../../controllers/transactions/transaction.validation";
import {
    deleteTransaction,
    findUserTransactions,
    postTransaction,
    putTransaction,
} from "../../controllers/transactions/transactions.controller";

const router = Router();

router.get("/", validateHeader, findUserTransactions);
router.post("/", validateSession, validateTransaction, postTransaction);
router.put("/:transactionId", validateHeader, validateTransactionUpdate, putTransaction);
router.delete("/:transactionId", validateHeader, deleteTransaction);

export default router;
