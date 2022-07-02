import { injectable } from 'tsyringe'
import { SpentsData } from '../../Domain/SpentsData'
import { CreditSpentsDataToJsonAdapter } from '../Adapters/CreditSpentsDataToJsonAdapter'
import { SpentsDataRepository } from '../../Domain/SpentsDataRepository'

import fs from 'fs'
const spentsJson = require('../../../../../mocks/json/spents.json')

@injectable()
export class SpentsDataRepositoryAppJson implements SpentsDataRepository {
    async save(data: SpentsData[]): Promise<SpentsData[]> {
        const toJson = CreditSpentsDataToJsonAdapter.from()
        const jsonSpent = JSON.stringify(toJson.toJson(data))
        fs.writeFile('mocks/json/AllSpents.json', jsonSpent, (err) => {
            if (err) {
                throw err
            }
        })

        return data
    } 
}
