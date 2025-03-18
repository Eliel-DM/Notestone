import { Request, Response } from "express";
import * as service from "../services/notes-service";

export const getNotes = async (req: Request, res: Response) => {
  const httpResponse = await service.getNotesService();
  res.status(httpResponse.code).json(httpResponse.content);
};

export const getNoteById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const httpResponse = await service.getNoteByIdService(parseInt(id));
  res.status(httpResponse.code).json(httpResponse.content);
};
