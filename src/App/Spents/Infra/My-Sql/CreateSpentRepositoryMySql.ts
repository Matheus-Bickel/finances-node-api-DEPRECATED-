import { inject, injectable } from "tsyringe";
import { DbConnection } from "../../../../Common/Db/DbConnection";
import { DbTypeConnectionTypeEnum } from "../../../../Common/Db/DbConnectionTypeEnum";
import { CreateSpentRepository } from "../../Domain/CreateSpentRepository";
import { SpentsData } from "../../Domain/SpentsData";

@injectable()
export class CreateSpentRepositoryMySql implements CreateSpentRepository {
    constructor(@inject(DbTypeConnectionTypeEnum.CONNECTION) private conn: DbConnection) {}
    
    async createSpent(req: Request, res: Response): Promise<SpentsData[]> {
        try {
            const data = req.body
            const command = this.conn.command()

            const exec = await command.execute({
                commandText: 'INSERT INTO SPENTS (name, type, value, date, parcels, parcelsInitialDate, parcelsfinalDate) values (${req.body})'
            })

            return await exec

        } finally {
            await this.conn.close()
        }
    }

}