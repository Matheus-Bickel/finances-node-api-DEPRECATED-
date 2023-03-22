export interface Exception {
    error: Error,
    stack?: string
}
export interface BaseException {
    exception(error: Error): Exception
}