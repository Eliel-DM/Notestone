import { notStrictEqual } from "assert";
import { NoteModel } from "../models/note-model";

const database = [
  {
    id: 1,
    name_note: "Minha Primeira Nota",
    content_note: "Este é o conteúdo da minha primeira nota.",
    data_creat_note: 1710600000000,
  },
  {
    id: 2,
    name_note: "Lista de Tarefas",
    content_note: "1. Comprar leite\n2. Estudar TypeScript\n3. Revisar código",
    data_creat_note: 1710700000000,
  },
  {
    id: 3,
    name_note: "Ideias para Projeto",
    content_note: "Criar um app de notas com TypeScript e Express.",
    data_creat_note: 1710800000000,
  },
];

export const findAllNotesRepository = async (): Promise<NoteModel[]> => {
  return database;
};

const findNoteByID = async (id: number): Promise<number> => {
  const index = database.findIndex((index) => index.id === id);
  return index;
};

export const findNoteByIdRepository = async (
  id: number
): Promise<NoteModel | undefined> => {
  const index = await findNoteByID(id);

  if (index !== -1) {
    return database[id - 1];
  } else {
    return undefined;
  }
};

export const deleteNoteByIdRepository = async (id: number) => {
  const deletedNote = database.splice(id - 1, 1);
  return deletedNote;
};

export const createNoteRepository = async (
  nota: NoteModel
): Promise<NoteModel> => {
  database.push(nota);
  return nota;
};

export const updateNoteById = async (id: number, note: NoteModel) => {
  const index = await findNoteByID(id);
  if (index == -1) {
    return null;
  } else {
    database[index] = note;
    return database[index];
  }
};
