import { SpentsDataParams } from './SpentsData'

export interface SpentsDataRepository {
    save(data: SpentsDataParams): Promise<SpentsDataParams>
}
