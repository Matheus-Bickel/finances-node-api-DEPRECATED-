import { SpentsData, SpentsDataParams } from '../Domain/SpentsData'

export class CreditCardSpentData extends SpentsData {
    constructor(protected params: SpentsDataParams) {
        super(params)
    }
}
