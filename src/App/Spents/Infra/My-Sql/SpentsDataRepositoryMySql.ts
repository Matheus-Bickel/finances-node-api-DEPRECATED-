import { inject, injectable } from "tsyringe";
import { DbConnection } from "../../../../Common/Db/DbConnection";
import { DbTypeConnectionTypeEnum } from "../../../../Common/Db/DbConnectionTypeEnum";
import { SpentsData } from "../../Domain/SpentsData";
import { SpentsDataRepository } from "../../Domain/SpentsDataRepository";
import { CREATE } from "./sql/CreateSpentQuery";

@injectable()
export class SpentsDataRepositoryMySql implements SpentsDataRepository {
    constructor(@inject(DbTypeConnectionTypeEnum.CONNECTION) private conn: DbConnection) {}

    async save(data: SpentsData[]): Promise<any> {
        
        await this.conn.open()
        const command = this.conn.command()
        
        try {
            const spents = Object.values(data)
            console.log(spents.length, 'DATA')
            
            for(const spent of spents) {
                const values = Object.values(spent)

                values.forEach(async function getQueryExecuted(spent): Promise<any> {
                    const exec = await command.execute({
                        commandText: CREATE,
                        binds: 
                        [
                            spent.id, 
                            spent.name, 
                            spent.type, 
                            spent.value, 
                            spent.date, 
                            spent.parcels, 
                            spent.parcelsInitialDate, 
                            spent.parcelsfinalDate
                        ] 
                    })
                
                    return
                })
            }
            
        } finally {
            await this.conn.close()
        }
    }

    async getQueryByLastAddRegisters(data: SpentsData[]):Promise<any> {
        const command = this.conn.command()
        let limit = 0

        const spents = Object.values(data)
        
        for(const spent of spents) {
            limit++
        }

        const exec = await command.execute({
            commandText: 'SELECT * FROM SPENTS WHERE LIMIT = ?',
            binds: [limit]
        })

        await this.conn.close()
        
        return exec
    }
}