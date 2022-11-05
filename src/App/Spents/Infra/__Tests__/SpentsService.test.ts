import 'reflect-metadata'

import { container } from 'tsyringe'
import { SpentsEnum } from '../../Domain/SpentsEnum'
import { SpentsBootstrap } from '../../Bootstrap/SpentsBootstrap'
import { SpentService } from '../../Domain/SpentService'
import { SpentsDataTest } from './SpentsDataTest'

describe('Should get and save the spent', () => {
    beforeAll(async () => {
        await new SpentsBootstrap().handler()
    })

    it('save spent', async () => {
        const services = container.resolve<SpentService>(SpentsEnum.SAVE_SPENTS_SERVICE)
        
        await services.export(SpentsDataTest.from())
    })
})