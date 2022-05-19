import { SpentTypeEnum } from './SpentTypeEnum'

export interface SpentsDataParams {
    id: number
    name: string
    type: SpentTypeEnum
    value: number
    date: Date
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
}
