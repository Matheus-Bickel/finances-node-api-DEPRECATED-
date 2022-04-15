import { SpentTypeEnum } from '../Enum/SpentTypeEnum'

export abstract class Spent {
    constructor(
        protected id: number,
        protected name: string,
        protected value: number,
        protected type: SpentTypeEnum
    ) {}

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getSpent(): number {
        return this.value
    }

    getType(): SpentTypeEnum {
        return this.type
    }

    abstract getMonthlytSpent(): number
}
