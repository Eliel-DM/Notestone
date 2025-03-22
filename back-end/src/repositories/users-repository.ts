import User from "../models/user-model";

export const getAllUsers = async () => {
  console.log(await User.findAll());
};
