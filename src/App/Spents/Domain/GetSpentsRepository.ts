import { SpentsData } from "./SpentsData";

export interface GetSpentsRepository {
    getSpents(): Promise<SpentsData[]>
}