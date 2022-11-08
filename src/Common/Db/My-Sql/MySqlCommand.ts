import { DbCommand } from "../DbCommand";

import MySql from 'mysql2';

export interface MySqlQueryData {
    commandText: string
    binds?: string
}

export class MySqlCommand implements DbCommand<MySqlQueryData> {
    constructor(private conn: MySql.Connection) {}

    execute(data: MySqlQueryData): Promise<any> {
        return new Promise((resolve, reject) => {
            this.conn.query(data.commandText, data.binds, async (error, result) => {
                if (error) reject(error)

                resolve(result)
            })
        })
    }
}