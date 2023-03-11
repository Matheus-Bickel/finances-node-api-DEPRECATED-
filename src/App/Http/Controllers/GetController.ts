import { Request } from 'express';
import { SpentsData } from "../../Spents/Domain/SpentsData";

export interface GetController {
    getSpents(req: Request): Promise<SpentsData[]>

    getSpentById(req: Request): Promise<SpentsData>
}