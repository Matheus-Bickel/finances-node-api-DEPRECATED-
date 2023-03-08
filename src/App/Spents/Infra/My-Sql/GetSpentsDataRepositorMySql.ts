import { inject, injectable } from "tsyringe";
import { DbConnection } from "../../../../Common/Db/DbConnection";
import { DbTypeConnectionTypeEnum } from "../../../../Common/Db/DbConnectionTypeEnum";
import { Filter } from "../../../../Common/Filter/Filter";
import { isEmpty } from "../../../../lib/Helpers/functions";
import { GetSpentsDataRepository } from "../../Domain/GetSpentsDataRepository";
import { SpentsData } from "../../Domain/SpentsData";
import { QUERY_PARAM, QUERY_TYPE } from "./sql/WhereTypeQuey";

@injectable()
export class GetSpentsDataRepositoryMysql implements GetSpentsDataRepository {
    constructor(@inject(DbTypeConnectionTypeEnum.CONNECTION) private conn: DbConnection) {}
    
    async getSpents(filter?: Filter): Promise<SpentsData[]> {
        await this.conn.open()

        try {
            const command = this.conn.command()

            if(filter) {
                if(!isEmpty(filter.type)) {
                    const type = filter.type
    
                    const data = await command.execute({
                        commandText: QUERY_TYPE,
                        binds: [type]
                    })
                    console.log(data, 'data 1')
                    return await data    
    
                } 
                
                if (!isEmpty(filter.params)) {
                    const param = filter.params
                    const data = await command.execute({
                        commandText: QUERY_PARAM,
                        binds: [param]
                    })
                    console.log(data, 'data 2')
                    return await data 
                }
            }

            if(filter == undefined) {
                const data = await command.execute({
                    commandText: 'SELECT * FROM SPENTS',
                    binds: []
                })
                console.log(data, 'data 3')
                return await data
            }

        } finally {
            await this.conn.close()
        }
    }
}