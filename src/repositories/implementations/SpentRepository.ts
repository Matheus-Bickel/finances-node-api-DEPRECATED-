import { Spent } from '../../spent/Spent'
import { CardSpentInterfaceRepository } from '../CardSpentInterfaceRepository'

export class SpentRepository implements CardSpentInterfaceRepository {
    async findById(id: number): Promise<Spent> {
        throw new Error('Method not implemented.')
    }
    async findAll(): Promise<Spent> {
        throw new Error('Method not implemented.')
    }

    async save(): Promise<Spent> {
        throw new Error('')
    }
}
