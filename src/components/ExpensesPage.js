import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function ExpensesPage() {

    const {expenseId} = useParams() 
    const [expense, setExpense] = useState(null)

    useEffect( () => {
        fetch('http://localhost:4000/expenses/'+expenseId)
        .then(response => response.json())
        .then(json => setExpense(json));
    }, []);

    
    return (
        <div className='container'>
            {
            expense 
            ? 
            <>
                <h1>Title: {expense.title}</h1>
                <h2>Description: </h2>
                <p>{expense.description}</p>
                <h3>Amount: {expense.amount}</h3>
            </>
             : 
            <p>No expenses logged!</p>
            }
        </div>
    )

}