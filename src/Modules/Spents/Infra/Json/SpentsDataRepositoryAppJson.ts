import { injectable } from 'tsyringe'
import { SpentsData, SpentsDataParams } from '../../Domain/SpentsData'
import { CreditSpentsDataToJsonAdapter } from '../Adapters/CreditSpentsDataToJsonAdapter'
import { SpentsDataRepository } from '../../Domain/SpentsDataRepository'

import fs from 'fs'

@injectable()
export class SpentsDataRepositoryAppJson implements SpentsDataRepository {
    async save(data: SpentsData[]): Promise<SpentsData[]> {
        const toJson = CreditSpentsDataToJsonAdapter.from()
        const spentJson = JSON.stringify(toJson.toJson(data))
        fs.writeFile('mocks/json/creditSpent.json', spentJson, (err) => {
            if (err) {
                throw err
            }
        })

        return data
    }
}
