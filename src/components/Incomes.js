import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function Income({ incomes, deleteIncome }) {
  

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
    <div className="container text-center">
      <button type="button" className="btn btn-light btn-sm m-3"><Link to="/incomes/new">Add New Income</Link></button>
      {incomes.length > 0 ? (
        <div className="row">
          {incomes.map(income => (
            <div key={income.id} className="col-lg-4 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title className="card-header">
                    <Link to={`/incomes/${income.id}`}>{income.title}</Link>
                  </Card.Title>
                  <Card.Text>
                    Amount: {income.amount}
                  </Card.Text>
                  <Card.Text>
                    Description: {income.description}
                  </Card.Text>
                  
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
