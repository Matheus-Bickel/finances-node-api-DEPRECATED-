import { DbCommand } from "./DbCommand"

export interface DbConnection {
    command(): DbCommand<any>
    open(): Promise<DbConnection>
    close(): Promise<void>
}