import { Json } from '../../../../lib/Json'
import { JsonTransform } from '../../../../lib/JsonTransform'
import { SpentsData } from '../../Domain/SpentsData'

export class SpentsDataToJsonAdapter implements JsonTransform {
    async toJson(data: SpentsData[]): Promise<Json> {

        return { spent: data }
    }

    static from(): SpentsDataToJsonAdapter {
        return new SpentsDataToJsonAdapter()
    }
}