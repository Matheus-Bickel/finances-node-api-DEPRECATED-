import { Filter } from "../../../Common/Filter/Filter";
import { SpentsData } from "./SpentsData";

export interface UpdateSpentDataRepository {
    updateData(data: SpentsData[], filter: Filter): Promise<SpentsData>
}