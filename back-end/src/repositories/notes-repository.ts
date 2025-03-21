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

export const findNoteByIdRepository = async (
  id: number
): Promise<NoteModel | undefined> => {
  const index = database.findIndex((index) => index.id === id);

  if(index !== -1){
    return database[id-1]
  } else{
    return undefined;
  }
};

export const deleteNoteByIdRepository = async (id: number) =>{
  const deletedNote = database.splice(id-1, 1);
  return deletedNote;
  
} 


  

