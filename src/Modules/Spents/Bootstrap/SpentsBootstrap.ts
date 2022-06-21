import { container } from 'tsyringe'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { SpentsDataRepositoryAppJson } from '../Infra/Json/SpentsDataRepositoryAppJson'
import { Bootstrap } from './Bootstrap'

export class SpentsBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register(SpentsRepositoriesEnum.APP_REPOSITORY, SpentsDataRepositoryAppJson)
    }
}
