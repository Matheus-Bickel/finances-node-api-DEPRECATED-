import { inject, injectable } from "tsyringe";
import { DbConnection } from "../../../../Common/Db/DbConnection";
import { DbTypeConnectionTypeEnum } from "../../../../Common/Db/DbConnectionTypeEnum";
import { Filter } from "../../../../Common/Filter/Filter";
import { isEmpty } from "../../../../lib/Helpers/functions";
import { GetSpentsDataRepository } from "../../Domain/GetSpentsDataRepository";
import { SpentsData } from "../../Domain/SpentsData";
import { QUERY } from "./sql/WhereTypeQuey";

@injectable()
export class GetSpentsDataRepositoryMysql implements GetSpentsDataRepository {
    constructor(@inject(DbTypeConnectionTypeEnum.CONNECTION) private conn: DbConnection) {}
    
    async getSpents(filter?: Filter): Promise<SpentsData[]> {
        await this.conn.open()

        try {
            const command = this.conn.command()

            if(!isEmpty(filter)) {
                const type = filter.type

                const exec = await command.execute({
                    commandText: QUERY,
                    binds: [type]
                })

                console.log(exec)

                return exec
            } else {
                const exec = await command.execute({
                    commandText: 'SELECT * FROM SPENTS'
                })
    
                return await exec
            }

        } finally {
            await this.conn.close()
        }
    }
}