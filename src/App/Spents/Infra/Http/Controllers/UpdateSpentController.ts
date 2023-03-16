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
    private type_2: RepositoryTypeEnum

    async update(req: Request): Promise<SpentsData> {
        this.params = {params: req.params.id}
        this.data = req.body
        this.type = RepositoryTypeEnum.REPOSITORY_UPDATE_1
        this.type_2 = RepositoryTypeEnum.REPOSITORY_UPDATE_2
        
        const update = UpdateSpentsServiceImpl.from(getRepositoryInstanceFromFactory(this.type))
        await update.updateSpent(this.data, this.params)

        const lastUpdatedRegister = getRepositoryInstanceFromFactory(this.type_2)
        
        return await lastUpdatedRegister.getQueryByLastUpdatedRegisters(req.params.id)
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