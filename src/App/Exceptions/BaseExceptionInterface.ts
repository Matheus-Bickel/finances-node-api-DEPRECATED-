export interface BaseExceptionInterface {
    throwException(message: string, statusCode: number): BaseExceptionInterface
}