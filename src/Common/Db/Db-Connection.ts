import { DbCommand } from "./Db-Command"

export interface DbConnection {
    command(): DbCommand<any>
    open(): Promise<DbConnection>
    close(): Promise<void>
}