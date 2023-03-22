import { Filter } from "../../../Common/Filter/Filter";
import { SpentsData } from "./SpentsData";

export interface UpdateSpentService {
    updateSpent(data: SpentsData[], filter: Filter): Promise<SpentsData>
}