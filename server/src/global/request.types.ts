import { IncomingHttpHeaders } from "http";
import { Types } from "mongoose";

export interface TypedRequest<T> extends Express.Request {
    body: T;
    headers: IncomingHttpHeaders & { authorization?: string };
}

export interface TransactionRequestBody extends Express.Request {
    body: {
        user_id: Types.ObjectId;
        token: string;
        description: string;
        isIncome: boolean;
        date: Date;
    };
    headers: IncomingHttpHeaders & { authorization?: string };
}
