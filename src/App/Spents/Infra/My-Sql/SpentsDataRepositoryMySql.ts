import { inject, injectable } from "tsyringe";
import { DbConnection } from "../../../../Common/Db/DbConnection";
import { DbTypeConnectionTypeEnum } from "../../../../Common/Db/DbConnectionTypeEnum";
import { SpentsData } from "../../Domain/SpentsData";
import { SpentsDataRepository } from "../../Domain/SpentsDataRepository";
import { CREATE } from "./sql/CreateSpentQuery";

@injectable()
export class SpentsDataRepositoryMySql implements SpentsDataRepository {
    constructor(@inject(DbTypeConnectionTypeEnum.CONNECTION) private conn: DbConnection) {}

    async save(data: SpentsData[]): Promise<SpentsData[]> {
        await this.conn.open()
        
        try {
            const spent = data
            console.log(spent, 'SPENT DATA PARA QUERY')
            const command = this.conn.command()

            // const id  = null
            // const name = 'teste'
            // const type = 'pix'
            // const value = 2000.00
            // const date = '2022-11-08 16:00:23'
            // const parcels = 1
            // const parcelsInitialDate = null
            // const parcelsfinalDate = null


            const exec = await command.execute({
                commandText: CREATE,
                // binds: [id, name, type, value, date, parcels, parcelsInitialDate, parcelsfinalDate]
            })

            return await exec

        } finally {
            await this.conn.close()
        }
    }
    
}