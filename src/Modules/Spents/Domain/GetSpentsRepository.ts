import { Json } from "../../../lib/Json";
import { SpentsData, SpentsDataParams } from "./SpentsData";

export interface GetSpentsRepository {
    getSpents(data: SpentsData): Promise<SpentsData>
}