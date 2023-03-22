import { inject } from "tsyringe";
import { DbConnection } from "../../../../Common/Db/DbConnection";
import { DbTypeConnectionTypeEnum } from "../../../../Common/Db/DbConnectionTypeEnum";
import { GetLastUpdatedDataRepository } from "../../Domain/GetLastUpdatedDataRepository";
import { SpentsData } from "../../Domain/SpentsData";
import { LAST_UPDATED } from "./sql/GetLastUpdatedQuery";

export class GetLastUpdatedDataRepositryMysql implements GetLastUpdatedDataRepository {
    constructor(@inject(DbTypeConnectionTypeEnum.CONNECTION) private conn: DbConnection) {}
        
    async getQueryByLastUpdatedRegisters(id: number): Promise<SpentsData> {
        const command = this.conn.command()
        console.log(id, 'id')

        try {
            const lastRegisters = await command.execute({
                commandText: LAST_UPDATED,
                binds: [id]
            })
    
            await this.conn.close()
            console.log(lastRegisters, 'lasts')

            return lastRegisters
        } catch (error) {
            console.log(error, 'error')
        }
    }
}