import { inject, injectable } from "tsyringe";
import { Filter } from "../../../Common/Filter/Filter";
import { isEmpty } from "../../../lib/Helpers/functions";

import { GetSpentsDataRepository } from "../Domain/GetSpentsDataRepository";
import { GetSpentsService } from "../Domain/GetSpentsService";
import { SpentsData } from "../Domain/SpentsData";
import { SpentsRepositoriesEnum } from "../Domain/SpentsRepositoriesEnum";
import { SpentsDataToJsonAdapter } from "../Infra/Adapters/SpentsDataToJsonAdapter";
import { SpentException } from "../SpentsExceptions/SpentException";
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
            
            return await adapter.toJson(spents)
        } catch (error: any) {
            const teste = new SpentException().exception('deu banana', error)
            console.log(teste,  'teste')
        }
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