import { Request, Response } from 'express';
import { MySqlConnection } from '../../../../../Common/Db/My-Sql/MySqlConnection';
import { GetController } from '../../../../Http/Controllers/GetController';
import { GetSpentsServiceImpl } from '../../../Application/GetSpentsServiceImpl';
import { SpentsData } from '../../../Domain/SpentsData';
import { GetSpentRepositoryMysql } from '../../My-Sql/GetSpentRepositorMySql';

export class GetSpentsController implements GetController {

    private conn = new MySqlConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'finances'
    })
    
    async getSpents(req: Request, res: Response): Promise<SpentsData[]> {

        const data = GetSpentsServiceImpl.from(new GetSpentRepositoryMysql(this.conn))

        return await res.send(await data.getData())
    }

    async getSpentById(req: Request, res: Response): Promise<SpentsData> {
        const data = GetSpentsServiceImpl.from(new GetSpentRepositoryMysql(this.conn))

        const id = req.params.id

        return await res.send(await data.getData(id))
    }

    static from():GetSpentsController {
        return new GetSpentsController()
    }
}