import { container } from 'tsyringe'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { SpentsDataRepositoryJson } from '../Infra/SpentsDataRepositoryJson'
import { Bootstrap } from './Bootstrap'

export class SpentsBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register(SpentsRepositoriesEnum.APP_REPOSITORY, SpentsDataRepositoryJson)
    }
}
