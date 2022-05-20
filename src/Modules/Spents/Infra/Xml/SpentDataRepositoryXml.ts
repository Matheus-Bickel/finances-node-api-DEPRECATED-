import { injectable } from 'tsyringe'
import { XmlConverterToJson } from '../../../../Shared/XmlConverterToJson'
import { SpentsData } from '../../Domain/SpentsData'
import { SpentXmlToSpentData } from '../Adapters/SpentXmlToSpentData'
import { SpentsRepositoryXml } from '../../Domain/SpentsRepositoryXml'

import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)
@injectable()
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
