import { CardBrandEnum } from '../../Enum/CardBrandEnum'
import { SpentTypeEnum } from '../../Enum/SpentTypeEnum'

export interface CreateSpentDTO {
    id: number
    name: string
    value: number
    type: SpentTypeEnum
    cardBrand: CardBrandEnum
    installments: number
    installmentsInitialDate: Date
    installmentsFinalDate: Date
}
