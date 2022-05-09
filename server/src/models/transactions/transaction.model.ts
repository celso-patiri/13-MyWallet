import { model, Schema, Types } from "mongoose";

export interface ITransaction {
    description: String;
    value: String;
    isIncome: Boolean;
    date: Date;
    user_id: Types.ObjectId;
}

export interface IUpdateTransaction {
    description: String;
    value: String;
    date: Date;
}

const transactionSchema = new Schema<ITransaction>({
    description: { type: String, required: true },
    value: { type: String, required: true },
    isIncome: { type: Boolean, required: true },
    date: { type: Date, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
});

export const Transaction = model<ITransaction>("Transaction", transactionSchema);
