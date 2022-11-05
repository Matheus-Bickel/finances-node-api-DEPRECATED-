import { inject, injectable } from 'tsyringe'
import { SpentsData } from '../Domain/SpentsData'
import { SpentService } from '../Domain/SpentService'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { SpentsDataRepositoryAppJson } from '../Infra/Json/SpentsDataRepositoryAppJson'
@injectable()
export class SpentServiceImpl implements SpentService {
    constructor(
        @inject(SpentsRepositoriesEnum.APP_REPOSITORY) private spentsDataRepositoryJson: SpentsDataRepositoryAppJson
    ) {}

    async export(data: SpentsData) {
        const spentsToSave = []
            
        spentsToSave.push(data)
        await this.spentsDataRepositoryJson.save(spentsToSave)
    }
}
