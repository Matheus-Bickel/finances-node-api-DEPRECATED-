import { CardBrandEnum } from '../../Enum/CardBrandEnum'
import { SpentTypeEnum } from '../../Enum/SpentTypeEnum'
import { CardSpent } from '../CardSpent'

export class NubankCardSpent extends CardSpent {
    constructor(
        id: number,
        name: string,
        value: number,
        installments: number,
        installmentsInitialDate: Date,
        installmentsFinalDate: Date
    ) {
        super(
            id,
            name,
            value,
            SpentTypeEnum.CARD,
            CardBrandEnum.NUBANK,
            installments,
            installmentsInitialDate,
            installmentsFinalDate
        )
    }
}
