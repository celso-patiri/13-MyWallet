import { Router } from "express";
import {
  deleteTransaction,
  findUserTransactions,
  postTransaction,
  putTransaction,
} from "../../controllers/transactions/transactions.controller";
import { validateTransaction } from "../../middlewares/validation/transaction.validation";

const router = Router();

router.get("/", findUserTransactions);
router.post("/", validateTransaction, postTransaction);
router.put("/", validateTransaction, putTransaction);
router.delete("/", deleteTransaction);

export default router;
