import { Request, Response } from 'express';
import { SpentsData } from "./SpentsData";

export interface CreateSpentRepository {
    createSpent(req: Request, res: Response ): Promise<SpentsData[]>
}