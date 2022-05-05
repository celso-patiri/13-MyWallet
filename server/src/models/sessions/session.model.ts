import { model, Schema, Types } from "mongoose";

export interface ISession {
  user_id: Types.ObjectId;
  token: string;
}

const sessionSchema = new Schema<ISession>({
  user_id: { type: Schema.Types.ObjectId, required: true },
  token: { type: String, required: true },
});

export const Session = model<ISession>("Session", sessionSchema);
