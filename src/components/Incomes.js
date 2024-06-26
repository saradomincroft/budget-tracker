import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'


export default function Incomes() {
    const [incomes, setIncomes] = useState([]);
    //   const [notifMsg, setNotifMsg] = useState('');
    //   const [notifColor, setNotifColor] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    fetch('http://localhost:4000/incomes')
        .then(response => response.json())
        .then(json => setIncomes(json))
        .then(() => setIsLoading(false));
  }, []);

  function deleteIncome(id) {
    const updatedIncomes = incomes.filter(income => income.id !== id);
    setIncomes(updatedIncomes);
  }


    // setNotifMsg('The income has been deleted.');
    // setNotifColor('danger');


  function handleDelete(incomeId) {
    const confirm = window.confirm('Are you sure you want to delete this income?');
          if (!confirm) {
            return; 
          }
      fetch('http://localhost:4000/incomes/' + incomeId, {
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
                    Amount: ${income.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </Card.Text>
                  <Card.Text>
                    Description: {income.description}
                  </Card.Text>
                  
                </Card.Body>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => handleDelete(income.id)}>Delete</button>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p>No incomes logged yet!</p>
      )}
    </div>
  )
}
  
