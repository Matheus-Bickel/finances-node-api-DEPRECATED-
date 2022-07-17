import { inject } from "tsyringe";
import { Controller } from "../../../../../App/Http/Controllers/Controller";
import { SpentsData } from "../../../Domain/SpentsData";
import { SpentsEnum } from "../../../Domain/SpentsEnum";
import { Response, Request } from "express";
import { GetSpentsRepository } from "../../../Domain/GetSpentsRepository";
export class GetSpentsController implements Controller {
    constructor(
        @inject(SpentsEnum.GET_SPENTS_SERVICE) private getSpentsRepository: GetSpentsRepository
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