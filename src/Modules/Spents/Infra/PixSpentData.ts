import { SpentsData, SpentsDataParams } from '../Domain/SpentsData'

export interface PixSpentDataParams {
    forWho: string
    recurrent?: boolean
    recurrentTime?: number | undefined
}

export class PixSpentData extends SpentsData {
    constructor(protected params: SpentsDataParams, protected pixParams: PixSpentDataParams) {
        super(params)
    }

    getPerson(): string {
        return this.pixParams.forWho
    }

    getRecurrent(): boolean {
        return this.pixParams.recurrent
    }

    getRecurrentTimeIfExists(): number | undefined {
        return this.pixParams.recurrentTime
    }
}
