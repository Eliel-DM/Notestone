import * as repository from "../repositories/notes-repository";

export const getNotesService = async () => {
  const data = await repository.findAllNotes();
  return data;
};
