import { injectable } from 'tsyringe'
import { SpentsData, SpentsDataParams } from '../../Domain/SpentsData'
import { CreditSpentsDataToJsonAdapter } from '../Adapters/CreditSpentsDataToJsonAdapter'
import { SpentsDataRepository } from '../../Domain/SpentsDataRepository'

import fs from 'fs'
import { SpentTypeEnum } from '../../Domain/SpentTypeEnum'
import { DebitSpentsDataToJsonAdapter } from '../Adapters/DebitSpentDataToJsonAdapter'
import { PixSpentsDataToJsonAdapter } from '../Adapters/PixSpentsDataToJsonAdapter'

@injectable()
export class SpentsDataRepositoryAppJson implements SpentsDataRepository {
    async save(data: SpentsData[]): Promise<SpentsData[]> {
        if(data.find(value => value.getType() === SpentTypeEnum.CREDIT)) {
            const toJson = CreditSpentsDataToJsonAdapter.from()
            const spentJson = JSON.stringify(toJson.toJson(data))
            fs.writeFile('mocks/json/creditSpent.json', spentJson, (err) => {
                if (err) {
                    throw err
                }
            })

            return data
        }

        if(data.find(value => value.getType() === SpentTypeEnum.DEBIT)){
            const toJson = DebitSpentsDataToJsonAdapter.from()
            const spentJson = JSON.stringify(toJson.toJson(data))
            fs.writeFile('mocks/json/debitSpent.json', spentJson, (err) => {
                if (err) {
                    throw err
                }
            })

            return data
            
        } else {
            const toJson = PixSpentsDataToJsonAdapter.from()
            const spentJson = JSON.stringify(toJson.toJson(data))
            fs.writeFile('mocks/json/pixSpent.json', spentJson, (err) => {
                if (err) {
                    throw err
                }
            })

            return data
        }
    }
}
