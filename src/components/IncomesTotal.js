export default function IncomesTotal({ incomes }) {
    const totalIncomes = incomes.reduce((total, income) => total + parseFloat(income.amount), 0);
    return totalIncomes;
}
