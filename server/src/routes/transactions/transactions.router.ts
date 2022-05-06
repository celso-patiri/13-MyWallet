import { Router } from "express";
import { validateSession } from "../../controllers/auth/validation/session.validation";
import { validateTransaction } from "../../controllers/transactions/transaction.validation";
import {
  deleteTransaction,
  findUserTransactions,
  postTransaction,
  putTransaction,
} from "../../controllers/transactions/transactions.controller";

const router = Router();

router.get("/", validateSession, findUserTransactions);
router.post("/", validateSession, validateTransaction, postTransaction);
router.put("/", validateSession, validateTransaction, putTransaction);
router.delete("/", validateSession, deleteTransaction);

export default router;
