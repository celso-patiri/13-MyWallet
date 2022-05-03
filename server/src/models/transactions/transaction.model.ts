import { model, Schema } from "mongoose";

export interface ITransaction {
  description: String;
  income: Boolean;
  date: Date;
}

const transactionSchema = new Schema<ITransaction>({
  description: { type: String, required: true },
  income: { type: Boolean, required: true },
  date: { type: Date, required: true },
});

export const Transaction = model<ITransaction>(
  "Transaction",
  transactionSchema
);
