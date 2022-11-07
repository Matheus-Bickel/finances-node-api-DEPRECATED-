import { inject, injectable } from "tsyringe";
import { Filter } from "../../../Commom/Filter/Filter";
import { GetSpentsRepository } from "../Domain/GetSpentsRepository";
import { GetSpentsService } from "../Domain/GetSpentsService";
import { SpentsData } from "../Domain/SpentsData";
import { SpentsRepositoriesEnum } from "../Domain/SpentsRepositoriesEnum";
import { SpentsDataToJsonAdapter } from "../Infra/Adapters/SpentsDataToJsonAdapter";
@injectable()
export class GetSpentsServiceImpl implements GetSpentsService {
    constructor(
        @inject(SpentsRepositoriesEnum.SPENTS_REPOSITORY) private getSpentsRepository: GetSpentsRepository
    ){}

    async getData(filter?: Filter): Promise<SpentsData[]> {

        const spents = await this.getSpent(filter)
        const json = SpentsDataToJsonAdapter.from()
        
        return await json.toJson(spents)
    }

    private async getSpent(filter?: Filter): Promise<SpentsData[]> {
        return await this.getSpentsRepository.getSpents(filter)   
    }

    static from(getSpentsRepository: GetSpentsRepository): GetSpentsServiceImpl {
        return new GetSpentsServiceImpl(getSpentsRepository)
    }
}