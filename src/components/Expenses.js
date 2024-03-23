import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function Expenses({ expenses, updateStatus, deleteExpense }) {
  function toggle(expense) {
    fetch(`http://localhost:4000/expenses/${expense.id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: !expense.status
      })
    })
    .then(response => response.json())
    .then(json => {
      updateStatus(json);
    })
    .catch(error => console.error('Error toggling expense status:', error));
  }

  function handleDelete(expenseId) {
    fetch(`http://localhost:4000/expenses/${expenseId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        deleteExpense(expenseId);
      }
    })
    .catch(error => console.error('Error deleting expense:', error));
  }

  return (
    <div className="container text-center">
      <button type="button" className="btn btn-light btn-sm m-3">
        <Link to="/expenses/new">Add New Expense</Link>
      </button>
      {expenses.length > 0 ? (
        <div className="row">
          {expenses.map(expense => (
            <div key={expense.id} className="col-lg-4 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title className="card-header">
                    <Link to={`/expenses/${expense.id}`}>{expense.title}</Link>
                  </Card.Title>
                  <Card.Text>
                    Amount: {expense.amount}
                  </Card.Text>
                  <Card.Text>
                    Description: {expense.description}
                  </Card.Text>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      role="switch"
                      id={"switch-" + expense.id}
                      checked={expense.status}
                      onChange={() => toggle(expense)}
                    />
                    <label className="form-check-label" htmlFor={"switch-" + expense.id}>
                      {expense.status ? "Paid" : "Outstanding"}
                    </label>
                  </div>
                </Card.Body>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(expense.id)}
                >
                  Delete
                </button>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p>No expenses logged yet!</p>
      )}
    </div>
  );
}
