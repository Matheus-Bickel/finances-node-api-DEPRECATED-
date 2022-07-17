import { inject } from "tsyringe";
import { Response, Request } from "express";

import { GetSpentsRepositoryJson } from "../../Json/GetSpentsRepositoryJson";
import { Controller } from "../../../../../App/Http/Controllers/Controller";
import { SpentsData } from "../../../Domain/SpentsData";
import { SpentsEnum } from "../../../Domain/SpentsEnum";
export class GetSpentsController implements Controller {
    constructor(
        @inject(SpentsEnum.GET_SPENTS_SERVICE) private getSpentsRepository: GetSpentsRepositoryJson
    ) {}

    async getSpent(response: Response, request: Request, data: SpentsData): Promise<any> {
        const rep = response.status(200).send(async () => {
            const spents = await this.getSpentsRepository.getSpents(data)

            if(!spents) {
                response.status(500).send({'message': 'Unknow error'})
            }

            return rep
        })
    }

}