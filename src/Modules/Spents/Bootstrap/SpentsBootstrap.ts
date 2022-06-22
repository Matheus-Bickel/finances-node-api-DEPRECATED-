import { container } from 'tsyringe'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { GetSpentsRepositoryJson } from '../Infra/Json/GetSpentsRepositoryJson'
import { SpentsDataRepositoryAppJson } from '../Infra/Json/SpentsDataRepositoryAppJson'
import { Bootstrap } from './Bootstrap'

export class SpentsBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register(SpentsRepositoriesEnum.APP_REPOSITORY, SpentsDataRepositoryAppJson)
        container.register(SpentsRepositoriesEnum.SPENTS_REPOSITORY, GetSpentsRepositoryJson)
    }
}
