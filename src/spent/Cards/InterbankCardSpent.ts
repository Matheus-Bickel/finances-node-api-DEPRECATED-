import { CardBrandEnum } from '../../Enum/CardBrandEnum'
import { SpentTypeEnum } from '../../Enum/SpentTypeEnum'
import { CardSpent } from '../CardSpent'

export class InterbankCardSpent extends CardSpent {
    constructor(
        id: number,
        name: string,
        value: number,
        installments: number,
        installmentsInitialDate: Date,
        installmentsFinalDte: Date
    ) {
        super(
            id,
            name,
            value,
            SpentTypeEnum.CARD,
            CardBrandEnum.INTERBANK,
            installments,
            installmentsInitialDate,
            installmentsFinalDte
        )
    }
}
