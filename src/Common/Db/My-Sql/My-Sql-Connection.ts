import { DbCommand } from "../Db-Command";
import { DbConnection } from "../Db-Connection";

export class MySqlConnection implements DbConnection {
    command(): DbCommand<any, any> {
        throw new Error("Method not implemented.");
    }
    open(): Promise<DbConnection> {
        throw new Error("Method not implemented.");
    }
    close(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}