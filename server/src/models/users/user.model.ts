import { Schema, model } from "mongoose";

export interface IBaseUser {
  name: string;
  email: string;
  password: string;
}
const userSchema = new Schema<IBaseUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = model<IBaseUser>("User", userSchema);
