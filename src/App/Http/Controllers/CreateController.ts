import { Request, Response } from 'express';
import { SpentsData } from '../../Spents/Domain/SpentsData';
export interface CreateController {
    create(req: Request, res: Response ): Promise<SpentsData[]>
}