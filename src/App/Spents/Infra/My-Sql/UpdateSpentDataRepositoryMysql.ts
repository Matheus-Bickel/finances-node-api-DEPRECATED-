import { inject } from "tsyringe";
import { DbConnection } from "../../../../Common/Db/DbConnection";
import { DbTypeConnectionTypeEnum } from "../../../../Common/Db/DbConnectionTypeEnum";
import { Filter } from "../../../../Common/Filter/Filter";
import { SpentsData } from "../../Domain/SpentsData";
import { UpdateSpentDataRepository } from "../../Domain/UpdateSpentDataRepository";
import { UPDATE } from "./sql/UpdateSpentQuery";

export class UpdateSpentDataRepositoryMysql implements UpdateSpentDataRepository {
    constructor(@inject(DbTypeConnectionTypeEnum.CONNECTION) private conn: DbConnection) {}
    
    async updateData(data: SpentsData[], filter: Filter): Promise<any> {
        await this.conn.open()

        const command = this.conn.command()

        const spents = data
        for(const spent of spents) {
            const values = Object.values(spent)

            values.forEach(async function getQueryExecuted(spent): Promise<any> {
                const exec = await command.execute({
                    commandText: UPDATE,
                    binds: 
                    [
                        spent.id, 
                        spent.name, 
                        spent.type, 
                        spent.value, 
                        spent.date, 
                        spent.parcels, 
                        spent.parcelsInitialDate, 
                        spent.parcelsfinalDate,
                        filter.params
                    ] 
                })
    
                return spent
            })
        }
    }
}