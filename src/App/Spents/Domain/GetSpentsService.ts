import { Filter } from "../../../Common/Filter/Filter";
import { SpentsData } from "./SpentsData";

export interface GetSpentsService {
    getData(filter?: Filter): Promise<SpentsData[]>
}