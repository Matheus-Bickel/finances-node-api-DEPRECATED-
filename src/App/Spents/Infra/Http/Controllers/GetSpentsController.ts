import { Request, Response } from 'express';
import { MySqlConnection } from '../../../../../Common/Db/My-Sql/MySqlConnection';
import { Filter } from '../../../../../Common/Filter/Filter';
import { isEmpty } from '../../../../../lib/Helpers/functions';
import { GetController } from '../../../../Http/Controllers/GetController';
import { GetSpentsServiceImpl } from '../../../Application/GetSpentsServiceImpl';
import { SpentsData } from '../../../Domain/SpentsData';
import { GetSpentsDataRepositoryMysql } from '../../My-Sql/GetSpentsDataRepositorMySql';

export class GetSpentsController implements GetController {
    private params: Filter
    private query: Filter
    
    private conn = new MySqlConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'finances'
    })
    
    async getSpents(req: Request, res: Response): Promise<SpentsData[]> {
        const data = GetSpentsServiceImpl.from(new GetSpentsDataRepositoryMysql(this.conn))
        this.query = req.query

        if(!isEmpty(this.query)) {
            return await data.getData(this.query)
        }
        
        const teste = await data.getData()
        // console.log(teste, 'TODOS')
        return teste
    }

    async getSpentById(req: Request, res: Response): Promise<SpentsData> {
        const data = GetSpentsServiceImpl.from(new GetSpentsDataRepositoryMysql(this.conn))
        this.params = {params: req.params.id}
        
        const spents = await data.getData(this.params)
        
        for(const spent of spents) {
            return spent
        }
    }

    static from():GetSpentsController {
        return new GetSpentsController()
    }
}