import { Request, Response } from "express";
import * as service from "../services/notes-service";

export const getNotes = async (req: Request, res: Response) => {
  const httpResponse = await service.getNotesService();
  res.status(200).json(httpResponse);
};
