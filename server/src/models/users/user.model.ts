import { Schema, model } from "mongoose";

export interface IBaseUser {
  name: String;
  email: String;
  password: String;
}
const userSchema = new Schema<IBaseUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = model<IBaseUser>("User", userSchema);
