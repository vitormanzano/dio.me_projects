import { Request, Response } from "express"
import * as clubService from "../services/clubs-service"

export const getClubs = async (req: Request, res: Response) => {
    const response = await clubService.getClubService();
    res.status(response.statusCode).json(response.body);
}