import { Request, Response } from 'express';
import { Filter } from '../../../../../Common/Filter/Filter';
import { isEmpty } from '../../../../../lib/Helpers/functions';
import { GetController } from '../../../../Http/Controllers/GetController';
import { GetSpentsServiceImpl } from '../../../Application/GetSpentsServiceImpl';
import { SpentsData } from '../../../Domain/SpentsData';
import { SpentException } from '../../../SpentsExceptions/SpentException';
import { getRepositoryInstanceFromFactory } from '../../Factorys/SpentServiceFactory';
import { RepositoryTypeEnum } from '../../My-Sql/RepositoryTypeEnum';

export class GetSpentsController implements GetController {
    private params: Filter
    private query: Filter
    private type: RepositoryTypeEnum.REPOSITORY_GET
    
    async getSpents(req: Request): Promise<SpentsData[]> {
        this.query = req.query
        try {
            const data = GetSpentsServiceImpl.from(getRepositoryInstanceFromFactory(this.type))

            if(!isEmpty(this.query)) {
                return await data.getData(this.query)
            }
            
            return await data.getData()
        } catch (error: any) {
            const teste = new SpentException().exception('deu banana', error)
            console.log(teste,  'teste')
        }
    }

    async getSpentById(req: Request): Promise<SpentsData> {
        this.params = {params: req.params.id}
        
        const data = GetSpentsServiceImpl.from(getRepositoryInstanceFromFactory(this.type))
        const spents = await data.getData(this.params)
        
        for(const spent of spents) {
            return spent
        }
    }

    async formatResponse(req: Request, res: Response): Promise<Response> {
        const data = await GetSpentsController.from().getSpents(req)
    
        try {    
            const resp = res.send({
                status: 200,
                body: {
                    data: data
                }
            })

            console.log(data, 'data')

            if(data == undefined) {
                const teste = new SpentException().exception('deu banana')
                console.log(teste,  'teste')

                return teste
            }

            return resp
            
        } catch ($e) {
            const teste = new SpentException().exception('deu banana', $e)
            console.log(teste,  'teste')
        }
        
    }

    static from(): GetSpentsController {
        return new GetSpentsController()
    }
}