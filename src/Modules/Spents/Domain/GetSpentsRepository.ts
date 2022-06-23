import { SpentsData } from "./SpentsData";

export interface GetSpentsRepository {
    getSpents(data: SpentsData): Promise<SpentsData>
}