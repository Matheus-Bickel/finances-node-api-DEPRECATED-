import { SpentTypeEnum } from '../Enum/SpentTypeEnum'
import { Spent } from './Spent'

export class nuBankCardSpent extends Spent {
    constructor(id: number, name: string, value: number) {
        super(id, name, value, SpentTypeEnum.NUBANKCARD)
    }

    getMonthlytSpent(): number {
        throw new Error('Method not implemented.')
    }
}
