import { MySqlConnection } from "../../../../Common/Db/My-Sql/MySqlConnection";
import { SpentsDataRepository } from "../../Domain/SpentsDataRepository";
import { SpentsDataRepositoryMySql } from "../My-Sql/SpentsDataRepositoryMySql";

export function getRepositoryInstanceFromFactory(): SpentsDataRepository {
    const conn = new MySqlConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'finances'
    })
    
    return new SpentsDataRepositoryMySql(conn)
}