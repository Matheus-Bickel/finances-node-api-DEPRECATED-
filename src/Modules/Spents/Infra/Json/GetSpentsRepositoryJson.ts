import { GetSpentsRepository } from "../../Domain/GetSpentsRepository";
import { SpentsDataParams, SpentsData } from "../../Domain/SpentsData";

import fs from 'fs'
import util from 'util'
import { SpentsDataParamsToSpentDataAdapter } from "../Adapters/SpentsDataParamsToSpentDataAdapter";

const readFile = util.promisify(fs.readFile)

export class GetSpentsRepositoryJson implements GetSpentsRepository {
    async getSpents(spentsData: SpentsDataParams): SpentsData {
        const spent = await readFile('../../../../../mocks/json/spents.json', {
            encoding: 'utf-8'
        })

        return spent
    }
}