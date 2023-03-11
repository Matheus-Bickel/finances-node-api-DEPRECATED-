import { SpentsData } from "./SpentsData";

export interface GetLastUpdatedDataRepository {
    getQueryByLastUpadatedRegisters(data: SpentsData): Promise<SpentsData>
}