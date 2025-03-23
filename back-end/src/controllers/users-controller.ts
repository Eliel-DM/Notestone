import { Request, Response } from "express";
import * as service from "../services/users-service";

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const httpResponse = await service.getUserByIdService(parseInt(id));
  res.status(httpResponse.code).json(httpResponse.content);
};

export const getAllUser = async (req: Request, res: Response) => {
  const httpReponse = await service.getAllUserService();
  res.status(httpReponse.code).json(httpReponse.content);
};

export const createUser = async (req: Request, res: Response) =>{
    const userContent  = req.body;
    const httpResponse = await service.createUserService(userContent);
    res.status(httpResponse.code).json();
}