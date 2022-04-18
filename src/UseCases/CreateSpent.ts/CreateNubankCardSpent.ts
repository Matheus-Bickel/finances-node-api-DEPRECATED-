import { CardSpentInterfaceRepository } from '../../repositories/CardSpentInterfaceRepository'
import { CardSpent } from '../../spent/CardSpent'
import { CreateSpentDTO } from './CreateSpentDTO'

export class CreateNubankCardSpent {
    constructor(private spentRepository: CardSpentInterfaceRepository) {}

    async execute(data: CreateSpentDTO) {
        const spentAlreadyExists = await this.spentRepository.findById(data.id)

        if (spentAlreadyExists) {
            throw new Error('Este gasto já está cadastrado')
        }

        const spent = new CardSpent(
            data.id,
            data.name,
            data.value,
            data.type,
            data.cardBrand,
            data.installments,
            data.installmentsInitialDate,
            data.installmentsFinalDate
        )

        this.spentRepository.save(spent)
    }
}
