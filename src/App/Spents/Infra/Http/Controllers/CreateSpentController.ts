import { Request, Response } from 'express';
import { MySqlConnection } from '../../../../../Common/Db/My-Sql/MySqlConnection';
import { CreateController } from "../../../../Http/Controllers/CreateController";
import { SpentServiceImpl } from "../../../Application/SpentServiceImpl";
import { SpentsData } from "../../../Domain/SpentsData";
import { SpentsDataRepositoryMySql } from '../../My-Sql/SpentsDataRepositoryMySql';
export class CreateSpentController implements CreateController {
    private data: SpentsData[]

    private conn = new MySqlConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'finances'
    })
        
    async create(req: Request, res: Response): Promise<any> {
        this.data = req.body
       
        const spent = SpentServiceImpl.from(new SpentsDataRepositoryMySql(this.conn))
        await spent.export(this.data)

        return res.send({
            status: 201,
            body: {}
        })
    }

    static from(): CreateSpentController {
        return new CreateSpentController()
    }
}