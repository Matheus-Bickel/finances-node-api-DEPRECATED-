import { SpentsData, SpentsDataParams } from './SpentsData'

export interface SpentsRepositoryXml {
    getData(): Promise<SpentsData>
}
