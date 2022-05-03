import { User, IBaseUser } from "../../models/users/user.model";

//TODO: getUser
export const findUser = async () => {
  try {
    return "TODO: find user";
  } catch (err) {
    return err;
  }
};

//TODO: createUser
export const createUser = async (newUser: IBaseUser) => {
  try {
    return await User.create(newUser);
  } catch (err) {
    return err;
  }
};
