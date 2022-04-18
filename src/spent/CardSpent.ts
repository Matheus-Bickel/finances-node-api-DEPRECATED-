import { CardBrandEnum } from '../Enum/CardBrandEnum'
import { spentCategory } from '../Enum/SpentCategory'
import { SpentTypeEnum } from '../Enum/SpentTypeEnum'
import { Spent } from './Spent'

export class CardSpent extends Spent {
    protected spentCategory: spentCategory

    constructor(
        id: number,
        name: string,
        value: number,
        type: SpentTypeEnum,
        protected cardBrand: CardBrandEnum,
        protected installments: number,
        protected installmentsInitialDate: Date,
        protected installmentsFinalDate: Date
    ) {
        super(id, name, value, SpentTypeEnum.CARD)
    }

    getCardBrand(): CardBrandEnum {
        return this.cardBrand
    }

    getInstallments(): number {
        return this.installments
    }

    getInstallmentsInitialDate(): Date {
        return this.installmentsInitialDate
    }

    geInstallmentsFinalDate(): Date {
        return this.installmentsFinalDate
    }

    getMonthlytSpent(): number {
        throw new Error('Method not implemented.')
    }
}
