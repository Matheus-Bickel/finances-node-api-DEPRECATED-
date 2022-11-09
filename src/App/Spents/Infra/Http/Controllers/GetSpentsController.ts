import { Request, Response } from 'express';
import { MySqlConnection } from '../../../../../Common/Db/My-Sql/MySqlConnection';
import { isEmpty } from '../../../../../lib/Helpers/functions';
import { GetController } from '../../../../Http/Controllers/GetController';
import { GetSpentsServiceImpl } from '../../../Application/GetSpentsServiceImpl';
import { SpentsData } from '../../../Domain/SpentsData';
import { GetSpentsDataRepositoryMysql } from '../../My-Sql/GetSpentsDataRepositorMySql';

export class GetSpentsController implements GetController {

    private conn = new MySqlConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'finances'
    })
    
    async getSpents(req: Request, res: Response): Promise<SpentsData[]> {
        const data = GetSpentsServiceImpl.from(new GetSpentsDataRepositoryMysql(this.conn))
        const filter = req.query

        if(!isEmpty(filter)) {
            console.log('caiu aqui')
            return await res.send(await data.getData(filter))
        }
        
        return await res.send(await data.getData())
    }

    async getSpentById(req: Request, res: Response): Promise<SpentsData> {
        const data = GetSpentsServiceImpl.from(new GetSpentsDataRepositoryMysql(this.conn))
        const id = req.params.id

        return await res.send(await data.getData(id))
    }

    static from():GetSpentsController {
        return new GetSpentsController()
    }
}