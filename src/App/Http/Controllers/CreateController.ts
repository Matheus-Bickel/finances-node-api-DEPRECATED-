import { Request, Response } from 'express';

export interface CreateController {
    create(req: Request, res: Response ): Promise<any>
}