import React from 'react';
import IncomeIndex from './IncomesIndex';
import ExpensesIndex from './ExpensesIndex';
import DifferenceIndex from './DifferenceIndex';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Container className="text-center pt-4">
      <h1 className="mb-4 display-4">BUDGET TRACKER</h1>

      <div className="row justify-content-center">
        <div className="col-12">
          <Card className="my-3 p-3 bg-light">
            <Card.Body>
              <IncomeIndex />
            </Card.Body>
          </Card>
        </div>

        <div className="col-12">
          <Card className="my-3 p-3 bg-light">
            <Card.Body>
              <ExpensesIndex />
            </Card.Body>
          </Card>
        </div>

        <div className="col-12">
          <Card className="my-3 p-3 bg-light">
            <Card.Body>
              <DifferenceIndex />
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
