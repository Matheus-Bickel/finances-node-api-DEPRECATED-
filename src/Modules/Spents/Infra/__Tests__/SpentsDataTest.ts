import { SpentsData, SpentsDataParams } from "../../Domain/SpentsData";
import { SpentTypeEnum } from "../../Domain/SpentTypeEnum";

export class SpentsDataTest extends SpentsData {
    constructor(protected params: SpentsDataParams) {
        super(params)
    }

    static from(): SpentsData {
        return new SpentsDataTest({
        "id": 1,
        "name": "Uber",
        "type": SpentTypeEnum.CREDIT,
        "value": 12,
        "date": new Date(),
        "parcels": 0,
        "parcelsInitialDate": new Date(),
        "parcelsfinalDate": new Date()})
    }
}