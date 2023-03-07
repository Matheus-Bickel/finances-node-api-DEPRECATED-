import { BaseException, Exception } from "../../Exceptions/BaseException";
export class SpentException implements BaseException {
    exception(error?: Error): Exception {
        return {
            error: JSON.parse(error.message),
            stack: error.stack
        }
    }
}