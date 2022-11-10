import { Request, Response } from 'express';

export interface UpdateController {
    update(req: Request, res: Response): Promise<any>
}