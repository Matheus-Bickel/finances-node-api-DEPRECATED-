export interface DbCommand<DATA, RETURN = any> {
    execute(data: DATA): Promise<RETURN>
}