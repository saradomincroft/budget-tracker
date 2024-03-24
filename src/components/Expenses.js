import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Expenses({ updateStatus }) {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    fetch('http://localhost:4000/expenses')
      .then(response => response.json())
      .then(json => {
        setExpenses(json);
        setIsLoading(false);
      });
  }, []);

  function addExpense(expenseTitle) {
    fetch('http://localhost:4000/expenses', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: expenseTitle,
      }),
    })
      .then(response => response.json())
      .then(json => {
        setExpenses(prev => [json, ...prev]);
        // setNotifMsg('A new income is successfully added!');
        // setNotifColor('success');
      });
  }

  function deleteExpense(id) {
    const filteredExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(filteredExpenses);
    // setNotifMsg('The income has been deleted.');
    // setNotifColor('danger');
  }

  function handleDelete(expenseId) {
    fetch('http://localhost:4000/expenses/' + expenseId, {
      method: "DELETE",
    })
      .then(response => {
        if (response.ok) {
          deleteExpense(expenseId);
        }
      });
  }

  function toggleStatus(id) {
    const updatedExpenses = expenses.map(expense => {
      if (expense.id === id) {
        return { ...expense, status: !expense.status };
      }
      return expense;
    });
    setExpenses(updatedExpenses);
  }

  return (
    <div className="container text-center">
      <button type="button" className="btn btn-light btn-sm m-3"><Link to="/expenses/new">Add New Expense</Link></button>
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
            filteredExpenses.map(expense => (
              <div key={expense.id} className="col-lg-4 mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title className="card-header">
                      {/* <Link to={`/expenses/${expense.id}`}>{expense.title}</Link> */}
                    </Card.Title>
                    <Card.Text>Amount: {expense.amount}</Card.Text>
                    <Card.Text>Description: {expense.description}</Card.Text>
                  </Card.Body>
                  <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(expense.id)}>Delete</button>
                  <button type="button" className="btn btn-primary btn-sm" onClick={() => toggleStatus(expense.id)}>{expense.status ? "Paid" : "Outstanding"}</button>
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