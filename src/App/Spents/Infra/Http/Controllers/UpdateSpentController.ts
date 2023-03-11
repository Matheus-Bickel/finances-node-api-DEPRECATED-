import { Request, Response } from "express";
import { Filter } from "../../../../../Common/Filter/Filter";
import { UpdateController } from "../../../../Http/Controllers/UpdateController";
import { UpdateSpentsServiceImpl } from "../../../Application/UpdateSpentsServiceImpl";
import { SpentsData } from "../../../Domain/SpentsData";
import { SpentException } from "../../../SpentsExceptions/SpentException";
import { getRepositoryInstanceFromFactory } from "../../Factorys/SpentServiceFactory";
import { RepositoryTypeEnum } from "../../My-Sql/RepositoryTypeEnum";

export class UpdateSpentController implements UpdateController {
    private data: SpentsData[]
    private params: Filter
    private type: RepositoryTypeEnum

    async update(req: Request): Promise<SpentsData> {
        this.params = {params: req.params.id}
        this.data = req.body
        this.type = RepositoryTypeEnum.REPOSITORY_UPDATE
        
        const update = UpdateSpentsServiceImpl.from(getRepositoryInstanceFromFactory(this.type))
        
        return await update.updateSpent(this.data, this.params)
    }

    async getformatedResponse(req: Request, res: Response): Promise<Response> {
        const data = UpdateSpentController.from()
        const result = await data.update(req)
            
        try {
            if(data == undefined) {
                throw new SpentException().exception()
            }

            return res.send({
                status: 200,
                body: {
                    data: result
                }
            })            
        } catch (error) {
            throw new SpentException().exception(error)
        }      
    }

    static from(): UpdateSpentController {
        return new UpdateSpentController()
    }
}