import { Types } from "mongoose";
import { v4 as uuid } from "uuid";
import { Session } from "../../models/sessions/session.model";

export const findSession = async (user_id: Types.ObjectId, token: string) => {
  try {
    return await Session.findOne({
      user_id,
      token,
    });
  } catch (err) {
    throw err;
  }
};

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
