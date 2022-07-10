import { SpentsData } from "./SpentsData";

export interface GetSpentsService {
    import(data: SpentsData): Promise<SpentsData[]>
}