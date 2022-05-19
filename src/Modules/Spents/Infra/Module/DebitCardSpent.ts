import { SpentsData, SpentsDataParams } from '../../Domain/SpentsData'

export interface DebitCardSpentDataParams {
    recurrent: boolean
    recurrentTime?: number
}

export class DebitCardSpentData extends SpentsData {
    constructor(
        protected params: SpentsDataParams,
        protected debitParams: DebitCardSpentDataParams
    ) {
        super(params)
    }

    getRecurrent(): boolean {
        return this.debitParams.recurrent
    }

    getRecurrentTimeIfExists(): number | undefined {
        return this.debitParams.recurrentTime
    }
}
