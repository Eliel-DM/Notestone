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

export const deleteNoteByIdRepository = async (id: number) => {
  const note = await Nota.findOne({ where: { id: id } });
  if (note) {
    await note.destroy();
    return true;
  }
  return false;
};

export const createNoteRepository = async (note: any) => {
  return await Nota.create(note);
};

export const updateNoteById = async (id: number, note: any) => {
  const isNote = await Nota.findOne({ where: { id: id } });
  if (isNote) {
    // Usar o método 'update' para atualizar os campos da nota
    await isNote.update(note);
    return isNote; // Retorna a nota já atualizada
  }
  return null; // Retorna null caso não encontre a nota
};
