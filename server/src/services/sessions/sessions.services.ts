import { Types } from "mongoose";
import { v4 as uuid } from "uuid";
import { Session } from "../../models/sessions/session.model";

const cleanExistingSession = async (user_id: Types.ObjectId) => {
  try {
    await Session.deleteOne({ user_id });
  } catch (err) {
    throw err;
  }
};

export const createSession = async (user_id: Types.ObjectId) => {
  try {
    await cleanExistingSession(user_id);
    return await Session.create({
      user_id,
      token: uuid(),
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
