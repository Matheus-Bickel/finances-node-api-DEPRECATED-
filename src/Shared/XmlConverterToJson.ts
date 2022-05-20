import convert from 'xml-js'
import { SpentsData, SpentsDataParams } from '../Modules/Spents/Domain/SpentsData'

export class XmlConverterToJson<T> {
    constructor(protected xml: string) {}

    async convert(): Promise<SpentsDataParams> {
        return JSON.parse(
            convert.xml2json(this.xml, {
                compact: true,
                ignoreComment: true,
                attributesKey: 'attributes',
                textKey: 'value',
            })
        )
    }
}
