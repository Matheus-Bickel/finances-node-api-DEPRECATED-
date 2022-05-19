import { Json } from '../../../../lib/Json'
import { JsonTransform } from '../../../../lib/JsonTransform'
import { SpentsDataParams } from '../../Domain/SpentsData'

export class CreditSpentsDataToJsonAdapter implements JsonTransform {
    toJson(data: SpentsDataParams): Json {
        return {
            id: data.id.toString(),
            name: data.name,
            value: data.value.toString(),
            type: data.type.toString(),
            parcels: data.parcels.toString(),
            parcelsInitialDate: data.parcelsInitialDate.toDateString(),
            parcelsfinalDate: data.parcelsfinalDate.toDateString(),
        }
    }

    static from(): CreditSpentsDataToJsonAdapter {
        return new CreditSpentsDataToJsonAdapter()
    }
}
