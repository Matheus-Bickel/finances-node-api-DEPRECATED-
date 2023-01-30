import { Request } from 'express';
import { Filter } from '../../../../../Common/Filter/Filter';
import { isEmpty } from '../../../../../lib/Helpers/functions';
import { GetController } from '../../../../Http/Controllers/GetController';
import { GetSpentsServiceImpl } from '../../../Application/GetSpentsServiceImpl';
import { SpentsData } from '../../../Domain/SpentsData';
import { getRepositoryInstanceFromFactory } from '../../Factorys/SpentServiceFactory';
import { RepositoryTypeEnum } from '../../My-Sql/RepositoryTypeEnum';

export class GetSpentsController implements GetController {
    private params: Filter
    private query: Filter
    private type: RepositoryTypeEnum.REPOSITORY_GET
    
    async getSpents(req: Request): Promise<SpentsData[]> {
        this.query = req.query
        
        const data = GetSpentsServiceImpl.from(getRepositoryInstanceFromFactory(this.type))

        if(!isEmpty(this.query)) {
            return await data.getData(this.query)
        }
        
        return await data.getData()
    }

    async getSpentById(req: Request): Promise<SpentsData> {
        this.params = {params: req.params.id}
        
        const data = GetSpentsServiceImpl.from(getRepositoryInstanceFromFactory(this.type))
        const spents = await data.getData(this.params)
        
        for(const spent of spents) {
            return spent
        }
    }

    static from(): GetSpentsController {
        return new GetSpentsController()
    }
}