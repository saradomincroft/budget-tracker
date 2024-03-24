import React from 'react';
import IncomeIndex from './IncomesIndex';
import ExpensesIndex from './ExpensesIndex';
import Balance from './Balance';
import IncomesTotal from './IncomesTotal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Home() {
  const totalIncomes = IncomesTotal;
  console.log(totalIncomes);

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
          {/* <Balance/> */}
        </Card.Body>
      </Card>
    </Container>
  );
}
