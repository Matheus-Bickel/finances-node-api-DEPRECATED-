import { SpentsData, SpentsDataParams } from "./SpentsData";

export interface SpentService {
    export(data: SpentsData[]): Promise<void>
}
