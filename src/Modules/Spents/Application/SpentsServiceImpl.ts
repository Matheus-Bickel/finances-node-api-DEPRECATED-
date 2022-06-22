import { inject } from 'tsyringe'
import { SpentsData } from '../Domain/SpentsData'
import { SpentService } from '../Domain/SpentService'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
import { GetSpentsRepositoryJson } from '../Infra/Json/GetSpentsRepositoryJson'
import { SpentsDataRepositoryAppJson } from '../Infra/Json/SpentsDataRepositoryAppJson'

export class SpentServiceImpl implements SpentService {
    constructor(
        @inject(SpentsRepositoriesEnum.APP_REPOSITORY) private spentsDataRepositoryJson: SpentsDataRepositoryAppJson,
        @inject(SpentsRepositoriesEnum.SPENTS_REPOSITORY) private getSpentsRepository: GetSpentsRepositoryJson
    ) {}

    private getSpent(data: SpentsData[]): SpentsData[] {
        const spent = this.getSpentsRepository.getSpents(data)

        return data
    }

    async export(data: SpentsData[]) {
        const spentsToSave = SpentsData[0]
        const spents = this.getSpent(data)
        
        for(const spent of spents) {
            if(spent)
            spentsToSave.push(spent)
        }

        await this.spentsDataRepositoryJson.save(spentsToSave)
    }
}
