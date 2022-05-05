import { IBaseUser, User } from "../../models/users/user.model";

export const findUser = async (email: string) => {
  try {
    return await User.findOne({ email });
  } catch (err) {
    throw err;
  }
};

export const createUser = async (newUser: IBaseUser) => {
  try {
    return await User.create(newUser);
  } catch (err) {
    throw err;
  }
};
