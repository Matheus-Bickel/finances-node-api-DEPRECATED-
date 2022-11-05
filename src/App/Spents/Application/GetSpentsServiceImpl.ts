import { inject, injectable } from "tsyringe";
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

    async getData(): Promise<SpentsData[]> {

        const spents = await this.getSpent()
        const jsonAdapter = SpentsDataToJsonAdapter.from()
        
        return await jsonAdapter.toJson(spents)
    }

    private async getSpent(): Promise<SpentsData[]> {
        return await this.getSpentsRepository.getSpents()   
    }

    static from(getSpentsRepository: GetSpentsRepository): GetSpentsServiceImpl {
        return new GetSpentsServiceImpl(getSpentsRepository)
    }
}