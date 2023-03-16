import { SpentsData } from "./SpentsData";

export interface GetLastUpdatedDataRepository {
    getQueryByLastUpdatedRegisters(id: number): Promise<SpentsData>
}