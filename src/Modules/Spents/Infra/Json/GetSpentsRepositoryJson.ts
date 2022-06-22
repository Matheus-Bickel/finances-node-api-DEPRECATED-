import tsyringe, { injectable } from  'tsyringe'
import { GetSpentsRepository } from "../../Domain/GetSpentsRepository";
import { SpentsData } from "../../Domain/SpentsData";

import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)
@injectable()
export class GetSpentsRepositoryJson implements GetSpentsRepository {
    async getSpents(data: SpentsData[]): Promise<void> {
        const toJson = (spentsData: SpentsData) => spentsData.toJson()
        const spentJson = JSON.stringify(data.map(toJson))
        const spent = await readFile('mocks/json/spents.json', {
            encoding: 'utf-8'
        })
    }
}