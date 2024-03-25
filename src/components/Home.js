import React from 'react';
import IncomeIndex from './IncomesIndex';
import ExpensesIndex from './ExpensesIndex';
import DifferenceIndex from './DifferenceIndex';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Home() {
  
  return (
    <Container className="text-center">
      <h1>Budget Tracker</h1>

      <Card className="my-3 p-3">
        <Card.Body>
          <IncomeIndex />
        </Card.Body>
      </Card>

      <Card className="my-3 p-3">
        <Card.Body>
          <ExpensesIndex />
        </Card.Body>
      </Card>

      <Card className="my-3 p-3">
        <Card.Body>
          <DifferenceIndex />
        </Card.Body>
      </Card>
    </Container>
  );
}
