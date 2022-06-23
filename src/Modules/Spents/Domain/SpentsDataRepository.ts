import { SpentsData } from './SpentsData'

export interface SpentsDataRepository {
    save(data: SpentsData[]): Promise<SpentsData[]>
}
