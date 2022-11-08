import { Request, Response } from "express";
import { Controller } from "../../../../../App/Http/Controllers/Controller";
import { GetSpentsServiceImpl } from "../../../Application/GetSpentsServiceImpl";
import { SpentsData } from "../../../Domain/SpentsData";
import { GetSpentsRepositoryJson } from "../../Json/GetSpentsRepositoryJson";
export class GetSpentsController implements Controller {

    async getSpents(req: Request, res: Response): Promise<SpentsData[]> {
        const data = GetSpentsServiceImpl.from(GetSpentsRepositoryJson.of())

        return await res.send(await data.getData())
    }

    async getSpentById(req: Request, res: Response): Promise<SpentsData> {
        const data = GetSpentsServiceImpl.from(GetSpentsRepositoryJson.of())

        const id = req.params.id

        return await res.send(await data.getData(id))

    }

    static from():GetSpentsController {
        return new GetSpentsController()
    }
}