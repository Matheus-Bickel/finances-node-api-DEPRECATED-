import { SpentsData } from "./SpentsData";

export interface GetLastSpentsDataRegistersRepository {
    getQueryByLastAddRegisters(data: SpentsData[]):Promise<SpentsData[]>   
}