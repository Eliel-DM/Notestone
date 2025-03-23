import User from "../models/user-model";

export const getAllUsersRepository = async () => {
  return await User.findAll();
};

export const getUserByIdRepository = async (id: number) => {
  return await User.findOne({ where: { id: id } });
};

export const deleteUserByIdRepository = async (id: number) => {
  const user = await User.findOne({ where: { id: id } });

  if (user) {
    await user.destroy();
    return true;
  }
  return false;
};

export const createUserRepository = async (user: any) => {
 await User.create(user);
};

export const updateUserByIdRepository = async (id: number, user: any) => {
  const isUser = await User.findOne({ where: { id: id } });

  if (isUser) {
    return await user.update(user);
  }
  return null;
};
