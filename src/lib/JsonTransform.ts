import { SpentsData } from '../Modules/Spents/Domain/SpentsData'
import { Json } from './Json'

export interface JsonTransform {
    toJson(data: SpentsData): Json
}
