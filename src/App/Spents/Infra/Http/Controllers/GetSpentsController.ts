import { Request, Response } from "express";
import { Controller } from "../../../../../App/Http/Controllers/Controller";
import { GetSpentsServiceImpl } from "../../../Application/GetSpentsServiceImpl";
import { SpentsData } from "../../../Domain/SpentsData";
import { GetSpentsRepositoryJson } from "../../Json/GetSpentsRepositoryJson";
export class GetSpentsController implements Controller {

    async getSpent(req: Request, res: Response): Promise<SpentsData> {
        const data = GetSpentsServiceImpl.from(GetSpentsRepositoryJson.of())

        if(req.query.type) {
            const filtered =  await data.getData()


            for(const spent of filtered) {
                if(spent.getType() == req.query.type) {
                    const queryParams = req.query.type
                    console.log(queryParams, 'query')
                    return await res.send(await data.getData(queryParams.toString()))
                }
            }
        }

        return await res.send(await data.getData())
    }

    static from():GetSpentsController {
        return new GetSpentsController()
    }
}