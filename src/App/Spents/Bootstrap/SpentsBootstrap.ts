import { container } from 'tsyringe'
import { Bootstrap } from './Bootstrap'
import { SpentsEnum } from '../Domain/SpentsEnum'
import { SpentServiceImpl } from '../Application/SpentServiceImpl'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { GetSpentsRepositoryJson } from '../Infra/Json/GetSpentsRepositoryJson'
import { SpentsDataRepositoryAppJson } from '../Infra/Json/SpentsDataRepositoryAppJson'
import { GetSpentsServiceImpl } from '../Application/GetSpentsServiceImpl'

export class SpentsBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register(SpentsEnum.SAVE_SPENTS_SERVICE, SpentServiceImpl)
        container.register(SpentsEnum.GET_SPENTS_SERVICE, GetSpentsServiceImpl)
        container.register(SpentsRepositoriesEnum.APP_REPOSITORY, SpentsDataRepositoryAppJson)
        container.register(SpentsRepositoriesEnum.SPENTS_REPOSITORY, GetSpentsRepositoryJson)
    }
}
