import { SpentTypeEnum } from './SpentTypeEnum'

export interface SpentsDataParams {
    id: number
    name: string
    type: SpentTypeEnum
    value: number
    date: Date
    parcels?: number
    parcelsInitialDate?: Date
    parcelsfinalDate?: Date
}

export abstract class SpentsData {
    constructor(protected params: SpentsDataParams) {}

    getId(): number {
        return this.params.id
    }

    getName(): string {
        return this.params.name
    }

    getType(): SpentTypeEnum {
        return this.params.type
    }

    getValue(): number {
        return this.params.value
    }

    getDate(): Date {
        return this.params.date
    }

    getParcels(): number | undefined {
        return this.params.parcels
    }

    getInitialParcelsDate(): Date | undefined {
        return this.params.parcelsInitialDate
    }

    getFinalParcelsDate(): Date | undefined {
        return this.params.parcelsfinalDate
    }
}
