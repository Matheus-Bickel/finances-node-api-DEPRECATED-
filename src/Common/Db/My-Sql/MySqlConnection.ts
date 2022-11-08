import { DbCommand } from "../DbCommand";
import { DbConnection } from "../DbConnection";
import { MySqlCommand } from "./MySqlCommand";

import MySql from 'mysql2';

export interface MySqlDbConnectionConfig {
    host: string
    user: string
    password: string
    database: string
}
export class MySqlConnection implements DbConnection {
    private conn: MySql.Connection

    constructor(config: MySqlDbConnectionConfig) {
        this.conn = MySql.createConnection(config)
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