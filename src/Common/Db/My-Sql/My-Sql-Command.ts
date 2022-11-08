import { DbCommand } from "../Db-Command";

import mySql from 'mysql';

export interface MySqlQueryData {
    commandText: string
    binds?: string
}

export class MySqlCommand implements DbCommand<MySqlQueryData> {
    constructor(private conn: mySql.Connection) {}

    execute(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}