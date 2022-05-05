import { model, Schema, Types } from "mongoose";

export interface ITransaction {
  description: String;
  income: Boolean;
  date: Date;
  user_id: Types.ObjectId;
}

const transactionSchema = new Schema<ITransaction>({
  description: { type: String, required: true },
  income: { type: Boolean, required: true },
  date: { type: Date, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
});

export const Transaction = model<ITransaction>("Transaction", transactionSchema);
