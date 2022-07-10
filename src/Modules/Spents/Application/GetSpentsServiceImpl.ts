import { inject, injectable } from "tsyringe";
import { SpentsData } from "../Domain/SpentsData";
import { SpentsRepositoriesEnum } from "../Domain/SpentsRepositoriesEnum";
import { GetSpentsRepositoryJson } from "../Infra/Json/GetSpentsRepositoryJson";
import { GetSpentsService } from "../Domain/GetSpentsService";
import { SpentsDataToJsonAdapter } from "../Infra/Adapters/SpentsDataToJsonAdapter";
@injectable()
export class GetSpentsServiceImpl implements GetSpentsService {
    constructor(
        @inject(SpentsRepositoriesEnum.SPENTS_REPOSITORY) private getSpentsRepository: GetSpentsRepositoryJson
    ){}

    private getSpent(data: SpentsData): Promise<SpentsData[]> {
        const spents = this.getSpentsRepository.getSpents(data)
        return spents
    }

    async import(data: SpentsData): Promise<SpentsData[]> {
        const spents = await this.getSpent(data)
        const jsonAdapter = SpentsDataToJsonAdapter.from()
        const spentJson = jsonAdapter.toJson(spents)
        
        console.log(spentJson)
        return spentJson
    }
}