import { MySqlConnection } from "../../../../Common/Db/My-Sql/MySqlConnection";
import { SpentsDataRepositoryMySql } from "../My-Sql/SpentsDataRepositoryMySql";

export function getRepositoryInstanceFromFactory(repository: RepositoryTypeEnum): RepositoryTypeEnum  {
    const conn = new MySqlConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'finances'
    })

    let repositoryType: T = repository


    switch(repository) {
        case 'teste':
            return new SpentsDataRepositoryMySql(conn)
            break
        case 'teste 2':
            return  
            break    
    }
    
    return new SpentsDataRepositoryMySql(conn)
}