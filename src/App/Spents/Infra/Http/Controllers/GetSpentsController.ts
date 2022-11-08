import { Request, Response } from "express";
import { Controller } from "../../../../../App/Http/Controllers/Controller";
import { MySqlConnection } from "../../../../../Common/Db/My-Sql/MySqlConnection";
import { GetSpentsServiceImpl } from "../../../Application/GetSpentsServiceImpl";
import { SpentsData } from "../../../Domain/SpentsData";
import { GetSpentsRepositoryJson } from "../../Json/GetSpentsRepositoryJson";
import { GetSpentRepositoryMysql } from "../../My-Sql/GetSpentRepositorMySql";
export class GetSpentsController implements Controller {

    async getSpents(req: Request, res: Response): Promise<SpentsData[]> {

        const conn = new MySqlConnection({
            host: process.env.MYSQL_HOST as string,
            user: process.env.MYSQL_USER as string,
            password: process.env.MYSQL_PASSWORD as string,
            database: process.env.MYSQL_DATABASE as string
        })

        const data = GetSpentsServiceImpl.from(new GetSpentRepositoryMysql(conn))

        return await res.send(await data.getData())
    }

    async getSpentById(req: Request, res: Response): Promise<SpentsData> {
        const data = GetSpentsServiceImpl.from(GetSpentsRepositoryJson.of())

        const id = req.params.id

        return await res.send(await data.getData(id))

    }

    static from():GetSpentsController {
        return new GetSpentsController()
    }
}