import { Request, Response } from "express";
import * as service from "../services/notes-service";
import { NoteModel } from "../models/note-model";

export const getNotes = async (req: Request, res: Response) => {
  const httpResponse = await service.getNotesService();
  res.status(httpResponse.code).json(httpResponse.content);
};

export const getNoteById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const httpResponse = await service.getNoteByIdService(parseInt(id));
  res.status(httpResponse.code).json(httpResponse.content);
};

export const deleteNoteById = async (req: Request, res: Response) =>{
  const id = req.params.id;
  const httpResponse = await service.deleteNoteByIdService(parseInt(id));
  res.status(httpResponse.code).json(httpResponse.content);
}

export const updateNoteById = async (req:Request, res: Response) =>{
  const id = req.params.id;
  const body: NoteModel  = req.params.body;
  const httpResponse = await service.updateNoteByIdService(parseInt(id),body);
  res.status(httpResponse.code).json(httpResponse.content)
}
