import { container } from 'tsyringe'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { SpentsDataRepositoryJson } from '../Infra/Json/SpentsDataRepositoryJson'
import { SpentsDataRepositoryXml } from '../Infra/Xml/SpentDataRepositoryXml'
import { Bootstrap } from './Bootstrap'

export class SpentsBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register(SpentsRepositoriesEnum.XML_REPOSITORY, SpentsDataRepositoryXml)
        container.register(SpentsRepositoriesEnum.JSON_REPOSITORY, SpentsDataRepositoryJson)
    }
}
