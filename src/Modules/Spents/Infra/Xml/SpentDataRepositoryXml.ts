import { XmlConverterToJson } from '../../../../Shared/XmlConverterToJson'
import { SpentsData, SpentsDataParams } from '../../Domain/SpentsData'
import { SpentsRepositoryXml } from '../../Domain/SpentsReposityXml'
import { SpentXmlToSpentData } from '../Adapters/SpentXmlToSpentData'

import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)

export class SpentsDataRepositoryXml implements SpentsRepositoryXml {
    async getData(): Promise<SpentsData> {
        const xml = await readFile('../../../../../mocks/xml/spents.xml', {
            encoding: 'utf8',
        })

        const xmlConverter = new XmlConverterToJson(xml)
        const response = await xmlConverter.convert()

        return SpentXmlToSpentData.of(response)
    }
}
