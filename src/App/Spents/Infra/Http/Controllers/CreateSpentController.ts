import { Request, Response } from 'express';
import { CreateController } from "../../../../Http/Controllers/CreateController";
import { SpentServiceImpl } from "../../../Application/SpentServiceImpl";
import { SpentsData } from "../../../Domain/SpentsData";
export class CreateSpentController implements CreateController {
    private data: SpentsData[]
        
    async create(req: Request, res: Response): Promise<SpentsData[]> {
        this.data = req.body
        
        const spent = await new SpentServiceImpl(req.body).export(this.data)

        return res.send({
            status: 201,
            body: spent
        })
    }

    static from(): CreateSpentController {
        return new CreateSpentController()
    }
}