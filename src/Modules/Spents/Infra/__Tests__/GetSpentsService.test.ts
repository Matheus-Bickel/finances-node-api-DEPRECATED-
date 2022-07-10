import 'reflect-metadata'
import { container } from 'tsyringe'

import { SpentsBootstrap } from "../../Bootstrap/SpentsBootstrap"
import { GetSpentsService } from '../../Domain/GetSpentsService'
import { SpentsEnum } from '../../Domain/SpentsEnum'
import { SpentsDataTest } from './SpentsDataTest'

describe('Should get and return spents', () => {
    beforeAll(async () => {
        await new SpentsBootstrap().handler()
    })
    
    it('get spents', async () => {
        const service = container.resolve<GetSpentsService>(SpentsEnum.GET_SPENTS_SERVICE)

        await service.import(SpentsDataTest.from())
    })
})