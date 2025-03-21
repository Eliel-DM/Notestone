import { StatusCode } from "../models/http-codes";
import { HttpResponse } from "../models/http-response";
import { NoteModel } from "../models/note-model";
import * as repository from "../repositories/notes-repository";

export const getNotesService = async (): Promise<HttpResponse> => {
  const data = await repository.findAllNotesRepository();
  //Verifica se o data é undefined ou se ele está vazio.
  if (!data || Object.keys(data).length == 0) {
    return {
      code: StatusCode.NO_CONTENT,
      content: data,
    };
  } else {
    return {
      code: StatusCode.OK,
      content: data,
    };
  }
};

export const getNoteByIdService = async (id: number): Promise<HttpResponse> => {
  const data = await repository.findNoteByIdRepository(id);

  //Caso a nota não exista irá retornar 
  if(data == undefined){
    return{
      code: StatusCode.BAD_REQUEST,
      content: null,
    }
  //Caso a nota exista mas esteja vazia irá retornar
  } else if (!data || Object.keys(data).length == 0){
    return{
      code: StatusCode.NO_CONTENT,
      content: [],
    }
  // Caso contrário retorna um OK com o conteudo da nota
  }else{
    return {
      code : StatusCode.OK,
      content: data,
    }
  }
 

};


export const deleteNoteByIdService = async (id: number): Promise <HttpResponse> =>{
  const data = await repository.deleteNoteByIdRepository(id);
  if (data) {
    return{
    code: StatusCode.OK,
    content: data,
  }

  } else {
    return{
      code: StatusCode.NOT_FOUND,
      content: [],
    }
  }
}

export const updateNoteByIdService = async (id: number, body: NoteModel): Promise <HttpResponse> =>{
  const data = await repository.updateNoteByIdRepository (id, body);
 
  if(data){
    return {
      code: StatusCode.OK,
      content: data,
    }
  } else{
    console.log("AQUI");
    return {
      code: StatusCode.BAD_REQUEST,
      content: [],
      
    }
  }

  
 
 


}
