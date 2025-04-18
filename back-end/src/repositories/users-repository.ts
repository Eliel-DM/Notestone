import { Usuario } from "../models/users-model";

export const getAllUsersRepository = async () => {
  return await Usuario.findAll();
};

export const getUserByIdRepository = async (id: number) => {
  return await Usuario.findOne({ where: { id: id } });
};

export const deleteUserByIdRepository = async (id: number) => {
  const user = await Usuario.findOne({ where: { id: id } });

  if (user) {
    await user.destroy();
    return true;
  }
  return false;
};

export const createUserRepository = async (user: any) => {
  await Usuario.create(user);
};

export const updateUserByIdRepository = async (id: number, user: any) => {
  const isUser = await Usuario.findOne({ where: { id: id } });

  if (isUser) {
    return await user.update(user);
  }
  return null;
};
