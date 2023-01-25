import { Request, Response } from 'express';
import { CreateController } from "../../../../Http/Controllers/CreateController";
import { SpentServiceImpl } from "../../../Application/SpentServiceImpl";
import { SpentsData } from "../../../Domain/SpentsData";
import { getRepositoryInstanceFromFactory } from '../../Factorys/SpentServiceFactory';
export class CreateSpentController implements CreateController {
    private data: SpentsData[]
    private type: 
        
    async create(req: Request, res: Response): Promise<any> {
        this.data = req.body
       
        const spent = SpentServiceImpl.from(getRepositoryInstanceFromFactory())
        await spent.export(this.data)
        

        // return res.send({
        //     status: 201,
        //     body: {}
        // })
    }

    static from(): CreateSpentController {
        return new CreateSpentController()
    }
}