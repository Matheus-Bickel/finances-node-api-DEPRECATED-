import { Request, Response } from 'express';
import { MySqlConnection } from '../../../../../Common/Db/My-Sql/MySqlConnection';
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
    private type: RepositoryTypeEnum

    conn = new MySqlConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'finances'
    })
    
    async getSpents(req: Request): Promise<SpentsData[]> {
        this.type = RepositoryTypeEnum.REPOSITORY_GET
        this.query = req.query
        
        try {
            const data = GetSpentsServiceImpl.from(getRepositoryInstanceFromFactory(this.type))

            if(!isEmpty(this.query)) {
                return await data.getData(this.query)
            }
            
            return await data.getData()
        } catch (error) {
            throw new SpentException().exception(error)
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
        const data = GetSpentsController.from()
        const result = await data.getSpents(req)
            
        try {
            if(data == undefined) {
                throw new SpentException().exception()
            }

            return res.send({
                status: 200,
                body: {
                    data: result
                }
            })            
        } catch (error) {
            throw new SpentException().exception(error)
        }
        
    }

    static from(): GetSpentsController {
        return new GetSpentsController()
    }
}