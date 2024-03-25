import React from 'react';
import IncomeIndex from './IncomesIndex';
import ExpensesIndex from './ExpensesIndex';
import Balance from './Balance';
import IncomesTotal from './IncomesTotal';
import Card from 'react-bootstrap/Card';
import ExpensesTotal from './ExpensesTotal';
import Container from 'react-bootstrap/Container';

export default function Home() {
  const totalIncomes = IncomesTotal;
  // const totalExpenses = ExpensesTotal(data);
  // console.log(totalIncomes);

  // function totalIncomes( incomes) {
  //   return incomes.reduce((total, income) => total + parseFloat(income.amount), 0);
  // }
  
  // function totalExpenses( expenses) {
  //   return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  // }
  

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
