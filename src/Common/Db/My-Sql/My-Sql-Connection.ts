import { DbCommand } from "../Db-Command";
import { DbConnection } from "../Db-Connection";
import { MySqlCommand } from "./My-Sql-Command";

import mySql from 'mysql';

export interface MySqlDbConnectionConfig {
    host: string
    user: string
    password: string
    database: string
}
export class MySqlConnection implements DbConnection {
    private conn: mySql.Connection

    constructor(config: MySqlDbConnectionConfig) {
        this.conn = mySql.createConnection(config)
    }
    
    async open(): Promise<DbConnection> {
        this.conn.connect()

        return this
    }
    
    async close(): Promise<void> {
        this.conn?.end()
    }

    command(): DbCommand<any, any> {
        return new MySqlCommand(this.conn)
    }
}