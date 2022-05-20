import { SpentsData } from './SpentsData'

export interface SpentsRepositoryXml {
    getData(data: SpentsData): Promise<SpentsData>
}
