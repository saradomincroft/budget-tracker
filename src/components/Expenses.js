import { Link } from 'react-router-dom';

export default function Expenses({ expenses }) {
  return (
    <>
    <button type="button"><Link to="/expenses/new">Add New Expense</Link></button>
    {
      expenses.length > 0
      ?
        <ul>
            {
                expenses.map( expense => {
                    return (
                        <li key={expense.id}>
                            <Link to={`/expenses/${expense.id}`}>{expense.title} {expense.description} {expense.amount}</Link>
                        </li>
                    )
                })
            } 
        </ul>
        :
        <p>No expenses logged yet!</p>
    }
    </>
  );
}
