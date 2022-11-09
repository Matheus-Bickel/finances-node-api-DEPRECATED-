import { injectable } from 'tsyringe';
import { Filter } from '../../../../Common/Filter/Filter';
import { GetSpentsDataRepository } from "../../Domain/GetSpentsDataRepository";
import { SpentsData } from "../../Domain/SpentsData";

import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile)
@injectable()
export class GetSpentsRepositoryJson implements GetSpentsDataRepository {
    async getSpents(filter: Filter): Promise<SpentsData[]> {
        const spent = await readFile('mocks/json/spents.json', {
            encoding: 'utf-8'
        })

        return await JSON.parse(spent)
    }

    static of(): GetSpentsRepositoryJson {
        return new GetSpentsRepositoryJson()
    }
}