import { Request, Response } from "express";
import * as service from "../services/notes-service";

export const getAllNotesByUser = async (req: Request, res: Response) => {
  const userId = req.params.usuario_id;
  const httpResponse = await service.getNotesByUserService(parseInt(userId));
  res.status(httpResponse.code).json(httpResponse.content);
};

export const getOneNoteById = async (req: Request, res: Response) => {
  const userId = req.params.usuario_id;
  const noteId = req.params.note_id;
  const httpResponse = await service.getOneNoteUserByIdService(
    parseInt(userId),
    parseInt(noteId)
  );
  res.status(httpResponse.code).json(httpResponse.content);
};

export const deleteNoteById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const httpResponse = await service.deleteNoteByIdService(parseInt(id));
  res.status(httpResponse.code).json();
};

export const postNote = async (req: Request, res: Response) => {
  const bodyValue = req.body;
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
