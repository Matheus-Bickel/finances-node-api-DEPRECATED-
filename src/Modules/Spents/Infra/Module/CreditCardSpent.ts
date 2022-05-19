import { SpentsData, SpentsDataParams } from '../../Domain/SpentsData'

export class CreditCardSpentData extends SpentsData {
    constructor(
        protected params: SpentsDataParams,
        protected parcels: number,
        protected parcelsInitialDate: Date,
        protected parcelsfinalDate: Date
    ) {
        super(params)
    }

    getParcels(): number {
        return this.parcels
    }

    getInitialDate(): Date {
        return this.parcelsInitialDate
    }

    getFinalDate(): Date {
        return this.parcelsfinalDate
    }
}
