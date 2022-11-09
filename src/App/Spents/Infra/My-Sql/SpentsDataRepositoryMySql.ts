import { inject, injectable } from "tsyringe";
import { DbConnection } from "../../../../Common/Db/DbConnection";
import { DbTypeConnectionTypeEnum } from "../../../../Common/Db/DbConnectionTypeEnum";
import { SpentsData } from "../../Domain/SpentsData";
import { SpentsDataRepository } from "../../Domain/SpentsDataRepository";

@injectable()
export class SpentsDataRepositoryMySql implements SpentsDataRepository {
    constructor(@inject(DbTypeConnectionTypeEnum.CONNECTION) private conn: DbConnection) {}

    async save(data: SpentsData[]): Promise<SpentsData[]> {
        await this.conn.open()
        
        try {
            const spent = data
            const command = this.conn.command()

            const exec = await command.execute({
                commandText: 'INSERT INTO SPENTS (name, type, value, date, parcels, parcelsInitialDate, parcelsfinalDate) VALUES (spent)'
            })

            return await exec

        } finally {
            await this.conn.close()
        }
    }
    
}