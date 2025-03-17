import { StatusCode } from "../models/http-codes";
import { HttpResponse } from "../models/http-response";
import * as repository from "../repositories/notes-repository";

export const getNotesService = async (): Promise<HttpResponse> => {
  const data = await repository.findAllNotes();
  //Verifica se o data é undefined ou se ele está vazio.
  if (!data || Object.keys(data).length == 0) {
    return {
      code: StatusCode.NOT_FOUND,
      body: data,
    };
  } else {
    return {
      code: StatusCode.OK,
      body: data,
    };
  }
};
