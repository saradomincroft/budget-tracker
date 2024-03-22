import IncomeIndex from "./IncomesIndex"
import ExpensesIndex from "./ExpensesIndex"
export default function Home() {
    return (
        <div className="container text-center">
        <h1>Budget Tracker</h1>

        <IncomeIndex />
        <ExpensesIndex />
        <h2>Balance Remaining:</h2>

        </div>
    )

    

}