import { Json } from "../../../../lib/Json"
import { JsonTransform } from "../../../../lib/JsonTransform"
import { SpentsData } from "../../Domain/SpentsData"

export class DebitSpentsDataToJsonAdapter implements JsonTransform {
    toJson(data: SpentsData[]): Json {
        return {
            id: data[0],
            name: data[1],
            value: data[2],
            type: data[3],
            parcels: data[4],
            parcelsInitialDate:data[5],
            parcelsfinalDate: data[6],
        }
    }

    static from(): DebitSpentsDataToJsonAdapter {
        return new DebitSpentsDataToJsonAdapter()
    }
}