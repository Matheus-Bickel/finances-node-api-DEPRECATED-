import { SpentTypeEnum } from '../../Enum/SpentTypeEnum'
import { Spent } from '../Spent'

export class CashSpent extends Spent {
    constructor(
        id: number,
        name: string,
        value: number,
        protected recurrent?: boolean,
        protected cashInstallments?: number
    ) {
        super(id, name, value, SpentTypeEnum.CASH)
    }

    getCashInstallments(): number {
        if (this.recurrent) {
            return this.cashInstallments
        }
    }

    getMonthlytSpent(): number {
        throw new Error('Method not implemented.')
    }
}
