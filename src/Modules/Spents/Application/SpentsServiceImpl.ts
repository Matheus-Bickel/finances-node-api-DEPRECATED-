import { inject } from 'tsyringe'
import { SpentsDataRepository } from '../Domain/SpentsDataRepository'
import { SpentService } from '../Domain/SpentService'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'

export class SpentServiceImpl implements SpentService {
    constructor(@inject(SpentsRepositoriesEnum.APP_REPOSITORY) private SpentRepository: SpentsDataRepository) {}

    async createSpent(): Promise<void> {}
}
