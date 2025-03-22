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

export const deleteNoteById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const httpResponse = await service.deleteNoteByIdService(parseInt(id));
  res.status(httpResponse.code).json();
};

export const postNote = async (req: Request, res: Response) => {
  const bodyValue: NoteModel = req.body;
  console.log(bodyValue);
  const httpResponse = await service.createNoteByService(bodyValue);
  res.status(httpResponse.code).json();
};

export const patchNoteById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const bodyValue = req.body;

  const httpResponse = await service.patchNoteByIdService(
    parseInt(id),
    bodyValue
  );
  res.status(httpResponse.code).json(httpResponse.content);
};
