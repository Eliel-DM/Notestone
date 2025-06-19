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

export const deleteNoteByIdService = async (
  usuario_id: number,
  note_id: number
): Promise<HttpResponse> => {
  const data = await repository.deleteNoteByIdRepository(usuario_id, note_id);
  if (!data) {
    return {
      code: StatusCode.NOT_FOUND,
      content: null,
    };
  } else {
    return {
      code: StatusCode.NO_CONTENT,
      content: null,
    };
  }
};

export const createNoteByService = async (note: any): Promise<HttpResponse> => {
  if (note) {
    const creatednote = await repository.createNoteRepository(note);
    return {
      code: StatusCode.CREATED,
      content: creatednote,
    };
  } else {
    return {
      code: StatusCode.BAD_REQUEST,
      content: null,
    };
  }
};

export const patchNoteByIdService = async (
  note_id: number,
  usuario_id: number,
  note: any
): Promise<HttpResponse> => {
  const data = await repository.updateNoteById(note_id, usuario_id, note);

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
