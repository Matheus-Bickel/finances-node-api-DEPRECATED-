import { container } from 'tsyringe'
import { GetSpentsServiceImpl } from '../Application/GetSpentsServiceImpl'
import { SpentServiceImpl } from '../Application/SpentServiceImpl'
import { SpentsEnum } from '../Domain/SpentsEnum'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { SpentsDataRepositoryJson } from '../Infra/Json/SpentsDataRepositoryJson'
import { SpentsDataRepositoryMySql } from '../Infra/My-Sql/SpentsDataRepositoryMySql'
import { Bootstrap } from './Bootstrap'

export class SpentsBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register(SpentsEnum.SAVE_SPENTS_SERVICE, SpentServiceImpl)
        container.register(SpentsEnum.GET_SPENTS_SERVICE, GetSpentsServiceImpl)
        container.register(SpentsRepositoriesEnum.APP_REPOSITORY, SpentsDataRepositoryJson)
        container.register(SpentsRepositoriesEnum.SPENTS_REPOSITORY, SpentsDataRepositoryMySql)
    }
}
