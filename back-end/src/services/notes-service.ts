import { StatusCode } from "../utils/http-codes";
import { HttpResponse } from "../models/http-response";
import * as repository from "../repositories/notes-repository";

export const getNotesByUserService = async (
  userId: number
): Promise<HttpResponse> => {
  const data = await repository.findAllNotesByUserRepository(userId);

  if (!data || data == null) {
    return {
      code: StatusCode.BAD_REQUEST,
      content: null,
    };
  } else {
    return {
      code: StatusCode.OK,
      content: data,
    };
  }
};

export const getOneNoteUserByIdService = async (
  userId: number,
  noteId: number
): Promise<HttpResponse> => {
  const data = await repository.findOneNoteUserByIdRepository(userId, noteId);

  if (!data || data == null) {
    return {
      code: StatusCode.BAD_REQUEST,
      content: null,
    };
  } else {
    return {
      code: StatusCode.OK,
      content: data,
    };
  }
};

export const deleteNoteByIdService = async (id: number) => {
  const data = await repository.deleteNoteByIdRepository(id);
  if (!data || data == null) {
    return {
      code: StatusCode.BAD_REQUEST,
    };
  } else {
    return {
      code: StatusCode.OK,
    };
  }
};

export const createNoteByService = async (note: any) => {
  if (note) {
    await repository.createNoteRepository(note);
    return {
      code: StatusCode.OK,
    };
  } else {
    return {
      code: StatusCode.BAD_REQUEST,
    };
  }
};

export const patchNoteByIdService = async (
  id: number,
  note: any
): Promise<HttpResponse> => {
  const data = await repository.updateNoteById(id, note);

  if (!data || data == null) {
    return {
      code: StatusCode.BAD_REQUEST,
      content: null,
    };
  } else {
    return {
      code: StatusCode.OK,
      content: data,
    };
  }
};
