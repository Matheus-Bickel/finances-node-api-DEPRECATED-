export class MonthlyIncome {
    constructor(private income: number, protected netSalary: number) {}

    getIncome(): number {
        return this.income
    }

    getNetSalary(): number {
        return this.netSalary
    }
}
