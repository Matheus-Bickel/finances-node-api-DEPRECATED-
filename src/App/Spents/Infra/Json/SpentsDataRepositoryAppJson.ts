import { injectable } from 'tsyringe'
import { SpentsData } from '../../Domain/SpentsData'
import { SpentsDataToJsonAdapter } from '../Adapters/SpentsDataToJsonAdapter'
import { SpentsDataRepository } from '../../Domain/SpentsDataRepository'

import fs from 'fs'
const spentsJson = require('../../../../../mocks/json/spents.json')

@injectable()
export class SpentsDataRepositoryAppJson implements SpentsDataRepository {
    async save(data: SpentsData[]): Promise<void> {
        const toJson = SpentsDataToJsonAdapter.from()
        const jsonSpents = JSON.stringify(toJson.toJson(data))
    
        fs.writeFile('mocks/json/AllSpents.json', jsonSpents, (err) => {
            if (err) {
                throw err
            }
        })
    } 
}
