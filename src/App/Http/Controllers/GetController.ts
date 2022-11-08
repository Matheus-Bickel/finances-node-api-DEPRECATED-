import { SpentsData } from "../../Spents/Domain/SpentsData";

export interface GetController {
    getSpents(req: Request, res: Response): Promise<SpentsData[]>

    getSpentById(req: Request, res: Response): Promise<SpentsData>
}