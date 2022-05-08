import { IncomingHttpHeaders } from "http";
import { Types } from "mongoose";

export interface TypedRequest<T> extends Express.Request {
    body: T;
    headers: IncomingHttpHeaders & { authorization?: string };
}

export interface TypedRequestHeader extends Express.Request {
    headers: IncomingHttpHeaders & {
        authorization?: string;
        user_id?: Types.ObjectId;
    };
}

export interface TransactionRequestBody extends Express.Request {
    body: {
        user_id: Types.ObjectId;
        token: string;
        value: string
        description: string;
        isIncome: boolean;
        date: Date;
    };
    headers: IncomingHttpHeaders & { authorization?: string };
}
