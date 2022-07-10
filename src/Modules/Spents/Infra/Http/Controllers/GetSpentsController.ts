import { container } from "tsyringe";

import { Controller } from "../../../../../App/Http/Controllers/Controller";
import { GetSpentsService } from "../../../Domain/GetSpentsService";
import { SpentsData } from "../../../Domain/SpentsData";
import { SpentsEnum } from "../../../Domain/SpentsEnum";

export class GetSpentsController implements Controller {
    constructor(){}
    async getSpents(data: SpentsData) {
        const spents = container.resolve<GetSpentsService>(SpentsEnum.GET_SPENTS_SERVICE)

        await spents.import(data)
    }
}