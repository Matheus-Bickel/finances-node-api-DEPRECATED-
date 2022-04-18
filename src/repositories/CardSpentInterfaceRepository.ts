import { Spent } from '../spent/Spent'

export interface CardSpentInterfaceRepository {
    findById(id: number): Promise<Spent>

    findAll(): Promise<Spent>

    save(spent: Spent): Promise<Spent>
}
