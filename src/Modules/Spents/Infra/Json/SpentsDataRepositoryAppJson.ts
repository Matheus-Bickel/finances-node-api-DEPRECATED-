import { injectable } from 'tsyringe'
import { SpentsData } from '../../Domain/SpentsData'
import { CreditSpentsDataToJsonAdapter } from '../Adapters/CreditSpentsDataToJsonAdapter'
import { SpentsDataRepository } from '../../Domain/SpentsDataRepository'
import { SpentTypeEnum } from '../../Domain/SpentTypeEnum'
import { DebitSpentsDataToJsonAdapter } from '../Adapters/DebitSpentDataToJsonAdapter'
import { PixSpentsDataToJsonAdapter } from '../Adapters/PixSpentsDataToJsonAdapter'

import fs from 'fs'

const spentsJson = require('../../../../../mocks/json/spents.json')

@injectable()
export class SpentsDataRepositoryAppJson implements SpentsDataRepository {
    async save(data: SpentsData[]): Promise<SpentsData[]> {
        if (spentsJson.type === SpentTypeEnum.CREDIT) {
            const toJson = CreditSpentsDataToJsonAdapter.from()
            const jsonSpent = JSON.stringify(toJson.toJson(data))
            fs.writeFile('mocks/json/CreditSpent.json', jsonSpent, (err) => {
                if (err) {
                    throw err
                }
            })
            
        } if (spentsJson.type === SpentTypeEnum.CREDIT) {
            const toJson = DebitSpentsDataToJsonAdapter.from()
            const jsonSpent = JSON.stringify(toJson.toJson(data))
            fs.writeFile('mocks/json/DebitSpent.json', jsonSpent, (err) => {
                if (err) {
                    throw err
                }
            })
        }

        return data
    } 
}
