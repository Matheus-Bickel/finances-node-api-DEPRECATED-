import { Request } from 'express';
import { CreateController } from "../../../../Http/Controllers/CreateController";
import { SpentServiceImpl } from "../../../Application/SpentServiceImpl";
import { SpentsData } from "../../../Domain/SpentsData";
import { getRepositoryInstanceFromFactory } from '../../Factorys/SpentServiceFactory';
import { RepositoryTypeEnum } from '../../My-Sql/RepositoryTypeEnum';
export class CreateSpentController implements CreateController {
    private data: SpentsData[]
        
    async create(req: Request): Promise<SpentsData[]> {
        this.data = req.body
        console.log(this.data, 'req')
    
        const rep_1 = RepositoryTypeEnum.REPOSITORY_1
        const rep_2 = RepositoryTypeEnum.REPOSITORY_2
       
        const spent = SpentServiceImpl.from(getRepositoryInstanceFromFactory(rep_1))
        await spent.export(this.data)

        const lastAddedRegisters = getRepositoryInstanceFromFactory(rep_2)
        
        return await lastAddedRegisters.getQueryByLastAddRegisters(this.data)
    }

    static from(): CreateSpentController {
        return new CreateSpentController()
    }
}