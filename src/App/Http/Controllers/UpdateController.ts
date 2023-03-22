import { Request } from 'express';
import { SpentsData } from '../../Spents/Domain/SpentsData';

export interface UpdateController {
    update(req: Request): Promise<SpentsData>
}