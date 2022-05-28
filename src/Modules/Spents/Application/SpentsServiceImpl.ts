import { inject } from 'tsyringe'
import { SpentService } from '../Domain/SpentService'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { SpentsDataRepositoryApp } from '../Infra/Json/SpentsDataRepositoryApp'

export class SpentServiceImpl implements SpentService {
    constructor(
        @inject(SpentsRepositoriesEnum.APP_REPOSITORY) private SpentDataRepositoryApp: SpentsDataRepositoryApp
    ) {}

    async createSpent(): Promise<void> {}
}
