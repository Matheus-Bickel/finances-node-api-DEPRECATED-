import { Request, Response } from 'express';
import { SpentsData } from "./SpentsData";

export interface CreateSpentDataRepository {
    createSpent(req: Request, res: Response ): Promise<SpentsData[]>
}