import { inject } from "tsyringe";
import { DbConnection } from "../../../../Common/Db/DbConnection";
import { DbTypeConnectionTypeEnum } from "../../../../Common/Db/DbConnectionTypeEnum";
import { GetLastUpdatedDataRepository } from "../../Domain/GetLastUpdatedDataRepository";
import { SpentsData } from "../../Domain/SpentsData";

export class GetLastUpdatedDataRepositryMysql implements GetLastUpdatedDataRepository {
    constructor(@inject(DbTypeConnectionTypeEnum.CONNECTION) private conn: DbConnection) {}

    private id: number
    
    async getQueryByLastUpadatedRegisters(data: SpentsData): Promise<SpentsData> {
        const command = this.conn.command()

        this.id = data.getId()

        const lastRegisters = await command.execute({
            commandText: 'SELECT * FROM SPENTS WHERE id = ?',
            binds: [this.id]
        })

        await this.conn.close()
        
        return lastRegisters
    }

}