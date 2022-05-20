import { readFile } from 'fs'
import { XmlConverterToJson } from '../../../../Shared/XmlConverterToJson'
import { SpentsData } from '../../Domain/SpentsData'
import { SpentsRepositoryXml } from '../../Domain/SpentsReposityXml'
import { SpentXmlToSpentData } from '../Adapters/SpentXmlToSpentData'

export class SpentsDataRepositoryXml implements SpentsRepositoryXml {
    async getData(): Promise<SpentsData> {
        const xml = await readFile('../../../../../mocks/xml/spents.xml', 'utf8', (err, data) => {
            if (err) {
                throw err
            }

            return data
        })

        const xmlConverter = new XmlConverterToJson(xml)
        const response = await xmlConverter.convert()

        return SpentXmlToSpentData.of(response)
    }
}
