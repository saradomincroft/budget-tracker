import { Outlet } from 'react-router-dom';
import ExpensesTotal from './ExpensesTotal'; 
import { useState, useEffect } from 'react';

export default function ExpensesIndex() {
    const [expenses, setExpenses] = useState([]);
    const [filter, setFilter] = useState("All");
    const [filteredExpenses, setFilteredExpenses] = useState([]);

    useEffect(() => {
        if (filter === "All") {
          setFilteredExpenses(expenses);
        } else if (filter === "Paid") {
          const paidExpenses = expenses.filter(expense => expense.status);
          setFilteredExpenses(paidExpenses);
        } else if (filter === "Outstanding") {
          const outstandingExpenses = expenses.filter(expense => !expense.status);
          setFilteredExpenses(outstandingExpenses);
        }
      }, [filter, expenses]);

    useEffect(() => {
        fetch('http://localhost:4000/expenses/')
            .then(response => response.json())
            .then(json => setExpenses(json))
            .catch(error => console.error('Error fetching expenses:', error));
    }, [expenses]);

    return (
        <div className="text-center">
        <div>
            <h2>Total Expenses: $<ExpensesTotal expenses={expenses} /></h2>
            <h5>Filters: 
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Paid">Paid</option>
                    <option value="Outstanding">Outstanding</option>
                </select>
            </h5>
            
        </div>
            
            {
                filteredExpenses.length > 0
                ?
                filteredExpenses.map( expense => {
                    
                })
                :
                <p>No expenses</p>
            }
            <Outlet />
        </div>
    );
}
