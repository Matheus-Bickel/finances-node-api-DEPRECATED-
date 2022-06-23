import tsyringe, { injectable } from  'tsyringe'
import { GetSpentsRepository } from "../../Domain/GetSpentsRepository";
import { SpentsData } from "../../Domain/SpentsData";

import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)
@injectable()
export class GetSpentsRepositoryJson implements GetSpentsRepository {
    async getSpents(data: SpentsData): Promise<SpentsData> {
        const spent = await readFile('mocks/json/spents.json', {
            encoding: 'utf-8'
        })

        const json = JSON.parse(spent)
        return json
    }
}