import { Request, Response } from "express";
import { MySqlConnection } from "../../../../../Common/Db/My-Sql/MySqlConnection";
import { Filter } from "../../../../../Common/Filter/Filter";
import { UpdateController } from "../../../../Http/Controllers/UpdateController";
import { UpdateSpentsServiceImpl } from "../../../Application/UpdateSpentsServiceImpl";
import { SpentsData } from "../../../Domain/SpentsData";
import { UpdateSpentDataRepositoryMysql } from "../../My-Sql/UpdateSpentDataRepositoryMysql";

export class UpdateSpentController implements UpdateController {
    private data: SpentsData[]
    private params: Filter

    private conn = new MySqlConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'finances'
    })

    async update(req: Request, res: Response): Promise<any> {
        this.params = {params: req.params.id}
        this.data = req.body
        
        const update = UpdateSpentsServiceImpl.from(new UpdateSpentDataRepositoryMysql(this.conn))
        const teste = await update.updateSpent(this.data, this.params)

        return res.send({
            status: 200
        })

    }

    static from(): UpdateSpentController {
        return new UpdateSpentController()
    }
}