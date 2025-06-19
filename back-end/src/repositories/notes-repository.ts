import { Nota } from "../models/notes-model";
import { Usuario } from "../models/users-model";

export const findAllNotesByUserRepository = async (userId: number) => {
  const notes = await Usuario.findByPk(userId, {
    include: [Nota],
  });
  return notes;
};

export const findOneNoteUserByIdRepository = async (
  userId: number,
  noteId: number
) => {
  const note = await Nota.findOne({
    where: {
      id: noteId,
      usuario_id: userId,
    },
    include: [Usuario],
  });

  return note;
};

export const deleteNoteByIdRepository = async (
  usuario_id: number,
  note_id: number
) => {
  const note = await Nota.findOne({
    where: { id: note_id, usuario_id: usuario_id },
  });
  if (note) {
    await note.destroy();
    return true;
  }
  return false;
};

export const createNoteRepository = async (note: any) => {
  return await Nota.create(note);
};

export const updateNoteById = async (
  note_id: number,
  usuario_id: number,
  note: any
) => {
  const isNote = await Nota.findOne({
    where: { id: note_id, usuario_id: usuario_id },
  });
  if (isNote) {
    await isNote.update(note);
    return isNote;
  }
  return null;
};
