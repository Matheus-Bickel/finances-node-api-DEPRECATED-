
import { Filter } from "../../../Common/Filter/Filter";
import { SpentsData } from "./SpentsData";

export interface GetSpentsDataRepository {
    getSpents(filter?: Filter, params?: string): Promise<SpentsData[]>
}