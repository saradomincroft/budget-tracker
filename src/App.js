import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Index from './components/Index';
import Home from './components/Home';
import ExpensesList from './components/ExpensesList';
import ExpensesForm from './components/ExpensesForm';
import Expenses from './components/Expenses';
import ExpensesIndex from './components/ExpensesIndex';
import ExpensesPage from './components/ExpensesPage';
import IncomesForm from './components/IncomesForm';
import Incomes from './components/Incomes'
import IncomesIndex from './components/IncomesIndex';
import IncomesPage from './components/IncomesPage';
import NotFound from "./components/NotFound"


function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  //   const [notifMsg, setNotifMsg] = useState('');
  //   const [notifColor, setNotifColor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function addIncome(incomeTitle) {
    fetch('http://localhost:4001/incomes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: incomeTitle

    })
  })
      .then(response => response.json())
      .then(json => {
        setIncomes( (prev) => [json, ...prev]);
        // setNotifMsg('A new income is successfully added!');
        // setNotifColor('success');
      })
  }

  function addExpense(expenseTitle) {
    fetch('http://localhost:4000/expenses', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: expenseTitle

    })
  })
      .then(response => response.json())
      .then(json => {
        setExpenses( (prev) => [json, ...prev]);
        // setNotifMsg('A new income is successfully added!');
        // setNotifColor('success');
      })
  }

  return (
    <div className="background-color">
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="incomes" element={<IncomesIndex />}>
            <Route index element={<Incomes  />} />
            {/* incomes={incomes} deleteIncome={deleteIncome} */}
            <Route path="new" element={<IncomesForm addIncome={addIncome} />} />
            <Route path=":incomeId" element={<IncomesPage />} />
          </Route>
          <Route path="expenses" element={<ExpensesIndex />}>
            <Route index element={<Expenses  />} />
            {/* expenses={expenses} deleteExpense={deleteExpense} */}
            <Route path="new" element={<ExpensesForm addExpense={addExpense} />} />
            <Route path=":expenseId" element={<ExpensesPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
