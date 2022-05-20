import { SpentsDataParams } from '../Domain/SpentsData'
import { SpentsDataRepository } from '../Domain/SpentsDataRepository'
import { CreditSpentsDataToJsonAdapter } from './Adapters/CreditSpentsDataToJsonAdapter'
import { injectable } from 'tsyringe'
import fs from 'fs'

@injectable()
export class SpentsDataRepositoryJson implements SpentsDataRepository {
    async save(data: SpentsDataParams): Promise<SpentsDataParams> {
        const toJson = CreditSpentsDataToJsonAdapter.from()
        const spentJson = JSON.stringify(toJson.toJson(data))

        fs.writeFile('../../../../../mocks/CreditSpent.json', spentJson, (err) => {
            if (err) {
                throw err
            }
        })

        return data
    }
}
