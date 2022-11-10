import { inject, injectable } from "tsyringe";
import { Filter } from "../../../Common/Filter/Filter";
import { isEmpty } from "../../../lib/Helpers/functions";

import { GetSpentsDataRepository } from "../Domain/GetSpentsDataRepository";
import { GetSpentsService } from "../Domain/GetSpentsService";
import { SpentsData } from "../Domain/SpentsData";
import { SpentsRepositoriesEnum } from "../Domain/SpentsRepositoriesEnum";
import { SpentsDataToJsonAdapter } from "../Infra/Adapters/SpentsDataToJsonAdapter";
@injectable()
export class GetSpentsServiceImpl implements GetSpentsService {
    constructor(
        @inject(SpentsRepositoriesEnum.SPENTS_REPOSITORY) private getSpentsDataRepository: GetSpentsDataRepository
    ){}

    async getData(filter?: Filter): Promise<SpentsData[]> {
        const adapter = SpentsDataToJsonAdapter.from()

        if(!isEmpty(filter)) {
            return this.getSpent(filter)
        } 
               
        const spents = await this.getSpent()
        // console.log(spents, 'TODOS')
        
        return await adapter.toJson(spents)
    }

    private async getSpent(filter?: Filter): Promise<SpentsData[]> {
        if(filter != undefined) {
            return await this.getSpentsDataRepository.getSpents(filter)
        }

        return await this.getSpentsDataRepository.getSpents()  
    }

    static from(getSpentsRepository: GetSpentsDataRepository): GetSpentsServiceImpl {
        return new GetSpentsServiceImpl(getSpentsRepository)
    }
}