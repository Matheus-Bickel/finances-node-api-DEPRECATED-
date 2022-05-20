import { SpentsData, SpentsDataParams } from '../../Domain/SpentsData'

export class SpentXmlToSpentData extends SpentsData {
    constructor(protected params: SpentsDataParams) {
        super(params)
    }

    static of(params: SpentsDataParams): SpentsData {
        return new SpentXmlToSpentData(params)
    }
}
