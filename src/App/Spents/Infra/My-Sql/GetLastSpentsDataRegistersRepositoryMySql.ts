import { inject } from "tsyringe";
import { DbConnection } from "../../../../Common/Db/DbConnection";
import { DbTypeConnectionTypeEnum } from "../../../../Common/Db/DbConnectionTypeEnum";
import { GetLastSpentsDataRegistersRepository } from "../../Domain/GetLastSpentsDataRegistersRepository";
import { SpentsData } from "../../Domain/SpentsData";

export class GetLastSpentsDataRegistersRepositoryMySql implements GetLastSpentsDataRegistersRepository {
    constructor(@inject(DbTypeConnectionTypeEnum.CONNECTION) private conn: DbConnection) {}
    
    async getQueryByLastAddRegisters(data: SpentsData[]): Promise<SpentsData[]> {
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