import { Request } from 'express';
import { SpentsData } from '../../Spents/Domain/SpentsData';
export interface CreateController {
    create(req: Request): Promise<SpentsData[]>
}