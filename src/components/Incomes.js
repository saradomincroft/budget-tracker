import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function Income({ incomes, status, updateStatus, deleteIncome }) {
  function toggle(income) {
    fetch('http://localhost:4001/incomes/' + income.id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: !status
      })
    })
    .then(response => response.json())
    .then(json => {
      updateStatus(json);
    });
  }

  function handleDelete(incomeId) {
    fetch('http://localhost:4001/incomes/' + incomeId, {
        method: "DELETE"
    })
    .then(response => {
        if (response.ok) {
            deleteIncome(incomeId);
        }
    });
  }

  return (
    <div className="container">
      <button type="button"><Link to="/incomes/new">Add New Income</Link></button>
      {incomes.length > 0 ? (
        <div className="row">
          {incomes.map(income => (
            <div key={income.id} className="col-lg-4 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <Link to={`/incomes/${income.id}`}>{income.title}</Link>
                  </Card.Title>
                  <Card.Text>
                    Amount: {income.amount}
                  </Card.Text>
                  <Card.Text>
                    Description: {income.description}
                  </Card.Text>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      role="switch"
                      id={"switch-" + income.id}
                      checked={status}
                      onChange={() => toggle(income)}
                    />
                    <label className="form-check-label" htmlFor={"switch-" + income.id}>
                      {status ? "Paid" : "Outstanding"}
                    </label>
                  </div>
                </Card.Body>
                <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(income.id)}>Delete</button>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p>No incomes logged yet!</p>
      )}
    </div>
  );
}
