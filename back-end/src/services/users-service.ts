import { HttpResponse } from "../models/http-response";
import * as repository from "../repositories/users-repository";
import { StatusCode } from "../utils/http-codes";

export const getUserByIdService = async (id: number): Promise<HttpResponse> => {
  const data = await repository.getUserByIdRepository(id);
  if (data) {
    return {
      code: StatusCode.OK,
      content: data,
    };
  } else {
    return {
      code: StatusCode.BAD_REQUEST,
      content: null,
    };
  }
};

export const getAllUserService = async (): Promise<HttpResponse> => {
  const data = await repository.getAllUsersRepository();

  if (data) {
    return {
      code: StatusCode.OK,
      content: data,
    };
  } else {
    return {
      code: StatusCode.BAD_REQUEST,
      content: null,
    };
  }
};

export const createUserService = async (user: any) => {
  if (user) {
    await repository.createUserRepository(user);
    return {
      code: StatusCode.OK,
    };
  } else {
    return {
      code: StatusCode.BAD_REQUEST,
    };
  }
};
