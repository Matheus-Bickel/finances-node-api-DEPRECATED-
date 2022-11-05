import { Request, Response } from "express";
import { Controller } from "../../../../../App/Http/Controllers/Controller";
import { GetSpentsServiceImpl } from "../../../Application/GetSpentsServiceImpl";
import { SpentsData } from "../../../Domain/SpentsData";
import { GetSpentsRepositoryJson } from "../../Json/GetSpentsRepositoryJson";
export class GetSpentsController implements Controller {

    async getSpent(req: Request, res: Response): Promise<SpentsData> {
        const getSpentsRepository = new GetSpentsRepositoryJson()
        
        const data = GetSpentsServiceImpl.from(getSpentsRepository)

        return await res.send(await data.getData())
    }
}