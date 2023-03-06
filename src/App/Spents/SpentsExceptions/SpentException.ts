import { BaseException } from "../../Exceptions/BaseException";

export class SpentException implements BaseException {
    exception(message: string, error?: any): any {
        return 'message + error'
    }
}