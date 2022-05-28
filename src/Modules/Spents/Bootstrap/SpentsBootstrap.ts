import { container } from 'tsyringe'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { SpentsDataRepositoryApp } from '../Infra/Json/SpentsDataRepositoryApp'
import { Bootstrap } from './Bootstrap'

export class SpentsBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register(SpentsRepositoriesEnum.APP_REPOSITORY, SpentsDataRepositoryApp)
    }
}
