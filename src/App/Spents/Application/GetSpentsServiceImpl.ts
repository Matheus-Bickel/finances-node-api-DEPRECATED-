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
        try {
            const adapter = SpentsDataToJsonAdapter.from()

            if(!isEmpty(filter)) {
                return this.getSpent(filter)
            } 
                
            const spents = await this.getSpent()
            
            const teste = await adapter.toJson(spents)
            console.log(teste, 'teste json 1')
            return teste
        } catch (error) {
            console.log(error.message, 'mes 2')
            // throw new SpentException().exception(error)
        }
    }

    private async getSpent(filter?: Filter): Promise<SpentsData[]> {
        if(filter != undefined) {
            return await this.getSpentsDataRepository.getSpents(filter)
        }

        const teste = await this.getSpentsDataRepository.getSpents()  
        console.log(teste, 'teste json 2')
        return teste
    }

    static from(getSpentsRepository: GetSpentsDataRepository): GetSpentsServiceImpl {
        return new GetSpentsServiceImpl(getSpentsRepository)
    }
}