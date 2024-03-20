import { Outlet } from "react-router-dom"

export default function ExpensesIndex() {

    return (
        <>
        <h2>Expenses</h2>
        <Outlet />
        </>
    )
}