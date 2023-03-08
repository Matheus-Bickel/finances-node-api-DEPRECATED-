import { MySqlConnection } from "../../../../Common/Db/My-Sql/MySqlConnection";
import { GetSpentsDataRepositoryMysql } from "../My-Sql/GetSpentsDataRepositorMySql";
import { RepositoryTypeEnum } from '../My-Sql/RepositoryTypeEnum';

// export interface RepositoriesTypes {
//     REPOSITORY: SpentsDataRepositoryMySql | GetLastSpentsDataRegistersRepositoryMySql
    
// }

export function getRepositoryInstanceFromFactory(repository: RepositoryTypeEnum): any  {
    const conn = new MySqlConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'finances'
    })

    switch(repository) {
        // case RepositoryTypeEnum.REPOSITORY_1:
        //     return new SpentsDataRepositoryMySql(conn)
        // case RepositoryTypeEnum.REPOSITORY_2:
        //     return new GetLastSpentsDataRegistersRepositoryMySql(conn)
        case RepositoryTypeEnum.REPOSITORY_GET:
            return new GetSpentsDataRepositoryMysql(conn)
    }
}