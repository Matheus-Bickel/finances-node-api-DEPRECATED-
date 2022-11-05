import { SpentsData } from "./SpentsData";

export interface GetSpentsService {
    getData(): Promise<SpentsData[]>
}