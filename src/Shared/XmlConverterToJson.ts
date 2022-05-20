import convert from 'xml-js'

export class XmlConverterToJson<T> {
    constructor(protected xml: any) {}

    async convert(): Promise<T> {
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
