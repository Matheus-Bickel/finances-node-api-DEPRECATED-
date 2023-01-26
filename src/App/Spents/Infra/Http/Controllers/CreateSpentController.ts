import { Request, Response } from 'express';
import { CreateController } from "../../../../Http/Controllers/CreateController";
import { SpentServiceImpl } from "../../../Application/SpentServiceImpl";
import { SpentsData } from "../../../Domain/SpentsData";
import { getRepositoryInstanceFromFactory } from '../../Factorys/SpentServiceFactory';
import { RepositoryTypeEnum } from '../../My-Sql/RepositoryTypeEnum';
export class CreateSpentController implements CreateController {
    private data: SpentsData[]
    // private type: RepositoryTypeEnum
        
    async create(req: Request, res: Response): Promise<SpentsData[]> {
        this.data = req.body
        // this.type = RepositoryTypeEnum.REPOSITORY_1
        const type = RepositoryTypeEnum.REPOSITORY_1
       
        const spent = SpentServiceImpl.from(getRepositoryInstanceFromFactory(type))
        await spent.export(this.data)

        const type_2 = RepositoryTypeEnum.REPOSITORY_2
        const last = getRepositoryInstanceFromFactory(type_2)

        return last.getQueryByLastAddRegisters(this.data)

    }

    static from(): CreateSpentController {
        return new CreateSpentController()
    }
}