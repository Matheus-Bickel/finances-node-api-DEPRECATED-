import { inject, injectable } from 'tsyringe'
import { SpentsData } from '../Domain/SpentsData'
import { SpentsDataRepository } from '../Domain/SpentsDataRepository'
import { SpentService } from '../Domain/SpentService'
import { SpentsRepositoriesEnum } from '../Domain/SpentsRepositoriesEnum'
@injectable()
export class SpentServiceImpl implements SpentService {
    constructor(
        @inject(SpentsRepositoriesEnum.SPENTS_REPOSITORY) private spentsDataRepository: SpentsDataRepository
    ) {}

    async export(data: SpentsData[]): Promise<SpentsData[]> {
        const spentsToSave = []
        const teste = spentsToSave.push(data)
        console.log(teste, 'TESTE')

       return await this.spentsDataRepository.save(spentsToSave)
    }

    static from(repository: SpentsDataRepository): SpentServiceImpl {
        return new SpentServiceImpl(repository)
    }
}
