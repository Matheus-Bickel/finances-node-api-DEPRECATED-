import { SpentsData } from "../../Spents/Domain/SpentsData";

export interface Controller {
    getSpents(req: Request, res: Response): Promise<SpentsData[]>

    getSpentById(req: Request, res: Response): Promise<SpentsData>
}