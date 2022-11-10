import { inject, injectable } from "tsyringe";
import { Filter } from "../../../Common/Filter/Filter";
import { SpentsData } from "../Domain/SpentsData";
import { SpentsRepositoriesEnum } from "../Domain/SpentsRepositoriesEnum";
import { UpdateSpentDataRepository } from "../Domain/UpdateSpentDataRepository";
import { UpdateSpentService } from "../Domain/UpdateSpentService";

@injectable()
export class UpdateSpentsServiceImpl implements UpdateSpentService {
    constructor(
        @inject(SpentsRepositoriesEnum.SPENTS_REPOSITORY) private updateSpentRepository: UpdateSpentDataRepository
    ) {}

    async updateSpent(data: SpentsData[], filter: Filter): Promise<SpentsData> {
        const spentsToSave = []
        spentsToSave.push(data)

        return await this.updateSpentRepository.updateData(spentsToSave, filter)
    }

    private async update(data: SpentsData[], filter?: Filter): Promise<SpentsData> {
        return await this.updateSpentRepository.updateData(data, filter)
    }

    static from(updateSpentRepository: UpdateSpentDataRepository): UpdateSpentsServiceImpl {
        return new UpdateSpentsServiceImpl(updateSpentRepository)
    }
}