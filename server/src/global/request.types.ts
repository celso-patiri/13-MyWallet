import { Types } from "mongoose";

export interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

export interface TransactionRequestBody extends Express.Request {
  body: {
    user_id: Types.ObjectId;
    token: string;
    description: string;
    income: boolean;
    date: Date;
  };
}
