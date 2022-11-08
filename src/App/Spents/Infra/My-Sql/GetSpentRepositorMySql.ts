import { inject, injectable } from "tsyringe";
import { DbConnection } from "../../../../Common/Db/DbConnection";
import { DbTypeConnectionTypeEnum } from "../../../../Common/Db/DbConnectionTypeEnum";
import { Filter } from "../../../../Common/Filter/Filter";
import { GetSpentsRepository } from "../../Domain/GetSpentsRepository";
import { SpentsData } from "../../Domain/SpentsData";

@injectable()
export class GetSpentRepositoryMysql implements GetSpentsRepository {
    constructor(@inject(DbTypeConnectionTypeEnum.CONNECTION) private conn: DbConnection) {}
    
    async getSpents(filter?: Filter, params?: number): Promise<SpentsData[]> {
        await this.conn.open()

        try {
            const command = this.conn.command()
            const exec = await command.execute({
                commandText: 'SELECT * FROM SPENTS'
            })

            return await JSON.parse(exec)

        } finally {
            await this.conn.close()
        }
    }
}