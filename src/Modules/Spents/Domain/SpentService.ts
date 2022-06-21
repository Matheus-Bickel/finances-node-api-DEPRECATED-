import { SpentsData, SpentsDataParams } from "./SpentsData";

export interface SpentService {
    save(spents: SpentsDataParams): Promise<SpentsData>
}
