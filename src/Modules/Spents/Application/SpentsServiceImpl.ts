import { inject } from 'tsyringe'
import { SpentsData, SpentsDataParams } from '../Domain/SpentsData'
import { SpentService } from '../Domain/SpentService'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { SpentsDataParamsToSpentDataAdapter } from '../Infra/Adapters/SpentsDataParamsToSpentDataAdapter'
import { SpentsDataRepositoryAppJson } from '../Infra/Json/SpentsDataRepositoryAppJson'

export class SpentServiceImpl implements SpentService {
    constructor(
        @inject(SpentsRepositoriesEnum.APP_REPOSITORY) private SpentDataRepositoryApp: SpentsDataRepositoryAppJson
    ) {}

    private getSpent(spentsData: SpentsDataParams): Promise<SpentsData> {
        
    }

    async save(spentsData: SpentsDataParams): Promise<SpentsDataParams> {
        // return spentsData
    }
}
