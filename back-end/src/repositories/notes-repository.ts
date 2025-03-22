import Note from "../models/note-model";



export const findAllNotesRepository = async () => {
  return await Note.findAll();
};

export const findNoteByIdRepository = async (id: number) => {
  return await Note.findOne({ where: { id: id } });
};

export const deleteNoteByIdRepository = async (id: number) => {
  const note = await Note.findOne({ where: { id: id } });
  if (note) {
    await note.destroy();
    return true;
  }
  return false;
};

export const createNoteRepository = async (note: any) => {
  return await Note.create(note);
};

export const updateNoteById = async (id: number, note: any) => {
  const isNote = await Note.findOne({ where: { id: id } });
  if (isNote) {
    return await note.update(note);
  }
  return null;
};
