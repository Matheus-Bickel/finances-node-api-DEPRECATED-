import { SpentsData, SpentsDataParams } from "./SpentsData";

export interface GetSpentsRepository {
    getSpents(spentsData: SpentsDataParams): SpentsData
}