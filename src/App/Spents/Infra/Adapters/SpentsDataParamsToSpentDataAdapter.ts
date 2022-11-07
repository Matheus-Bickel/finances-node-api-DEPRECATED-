import { SpentsData, SpentsDataParams } from "../../Domain/SpentsData";

export class SpentsDataParamsToSpentDataAdapter extends SpentsData {
    constructor(params: SpentsDataParams){
        super(params)
    }

    static from(params: SpentsDataParams): SpentsDataParamsToSpentDataAdapter {
        return new SpentsDataParamsToSpentDataAdapter(params)
    }
}