import { Json } from '../../../../lib/Json'
import { JsonTransform } from '../../../../lib/JsonTransform'
import { SpentsData } from '../../Domain/SpentsData'

export class CreditSpentsDataToJsonAdapter implements JsonTransform {
    toJson(data: SpentsData): Json {
        return {
            id: data.getId().toString(),
            name: data.getName(),
            value: data.getValue().toString(),
            type: data.getDate.toString(),
            parcels: data.getParcels.toString(),
            parcelsInitialDate: data.getInitialParcelsDate().toDateString(),
            parcelsfinalDate: data.getFinalParcelsDate().toDateString(),
        }
    }

    static from(): CreditSpentsDataToJsonAdapter {
        return new CreditSpentsDataToJsonAdapter()
    }
}
