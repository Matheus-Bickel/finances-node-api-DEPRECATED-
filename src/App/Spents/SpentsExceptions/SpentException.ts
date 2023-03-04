import { BaseExceptionInterface } from "../../Exceptions/BaseExceptionInterface";

export class SpentException implements BaseExceptionInterface {
    exception: BaseExceptionInterface
    
    throwException(message: string, statusCode: number): BaseExceptionInterface {
        return this.exception = {
            message: message,
            statusCode: statusCode
        }
    }
}