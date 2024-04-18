import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Notif from './Notif';

export default function Expenses({ updateStatus }) {
    const [expenses, setExpenses] = useState([]);
    const [notifMsg, setNotifMsg] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState('All');
    const [filteredExpenses, setFilteredExpenses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/expenses')
            .then((response) => response.json())
            .then((json) => setExpenses(json))
            .then(() => setIsLoading(false));
    }, []);

    function deleteExpense(id) {
        const updatedExpenses = expenses.filter((expense) => expense.id !== id);
        setExpenses(updatedExpenses);
        // setNotifMsg('The income has been deleted.');
        // setNotifColor('danger');
    }   

    function handleDelete(expenseId) {
          const confirm = window.confirm('Are you sure you want to delete this expense?');
          if (!confirm) {
            return; 
          }    
      fetch('http://localhost:4000/expenses/' + expenseId, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            deleteExpense(expenseId);
          }
        });
    }

  // FILTER/ TOGGLE (For expenses only, toggle paid/ outstanding. Filter by All, Paid, Outstanding)
  useEffect(() => {
    if (filter === 'All') {
      setFilteredExpenses(expenses);
    } else if (filter === 'Paid') {
      const paidExpenses = expenses.filter((expense) => expense.status);
      setFilteredExpenses(paidExpenses);
    } else if (filter === 'Outstanding') {
      const outstandingExpenses = expenses.filter((expense) => !expense.status);
      setFilteredExpenses(outstandingExpenses);
    }
  }, [filter, expenses]);

  function toggleStatus(id) {
    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === id) {
        return { ...expense, status: !expense.status };
      }
      return expense;
    });
    setExpenses(updatedExpenses);

    fetch('http://localhost:4000/expenses/' + id, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: !expenses.status,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
      
      });
  }
  

  return (
    <div className="container text-center">
      <button type="button" className="btn btn-light btn-sm m-3">
        <Link to="/expenses/new">Add New Expense</Link>
      </button>
      <div>
        <h5>Status:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Paid">Paid</option>
            <option value="Outstanding">Outstanding</option>
          </select>
        </h5>
      </div>
      {expenses.length > 0 ? (
        <div className="row">
          {filteredExpenses && filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense) => (
              <div key={expense.id} className="col-lg-4 mb-4">
                <Card>
                <button type="button" className={`btn ${expense.status ? 'btn-success' : 'btn-danger'} btn-sm `} onClick={() => toggleStatus(expense.id)}>{expense.status ? 'Paid' : 'Outstanding'}</button>

                  <Card.Body>

                    <Card.Title className="card-header">
                      <Link to={`/expenses/${expense.id}`}>{expense.title}</Link>
                    </Card.Title>
                    <Card.Text>
                      Amount: ${expense.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </Card.Text>
                    <Card.Text>Description: {expense.description}</Card.Text>
                  </Card.Body>
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => handleDelete(expense.id)} >
                    Delete
                  </button>
                </Card>
              </div>
            ))
          ) : (
            <p>No Expenses!</p>
          )}
        </div>
      ) : (
        <p>No Expenses!</p>
      )}
    </div>
  );
}
