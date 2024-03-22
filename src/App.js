import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Index from './components/Index';
import Home from './components/Home';
import ExpensesForm from './components/ExpensesForm';
import Expenses from './components/Expenses';
import ExpensesIndex from './components/ExpensesIndex';
import ExpensesPage from './components/ExpensesPage';
import IncomesForm from './components/IncomesForm';
import Incomes from './components/Incomes'
import IncomesIndex from './components/IncomesIndex';
import IncomesPage from './components/IncomesPage';


function App() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [notifMsg, setNotifMsg] = useState('');
  const [notifColor, setNotifColor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // EXPENSES
  useEffect(() => {
    fetch('http://localhost:4000/expenses')
      .then(response => response.json())
      .then(json => setExpenses(json))
      .then(() => setIsLoading(false));
  }, []);

  function addExpense(expense) {
    fetch('http://localhost:4000/expenses', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    })
      .then(response => response.json())
      .then(json => {
        setExpenses(prevExpenses => [...prevExpenses, json]);
        setNotifMsg('A new income is successfully added!');
        setNotifColor('success');
      });
  }

  function deleteExpense(id) {
    const filteredExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(filteredExpenses);
    setNotifMsg('The Expense has been deleted.');
    setNotifColor('danger');
  }

  // INCOMES
  useEffect(() => {
    fetch('http://localhost:4001/incomeS')
      .then(response => response.json())
      .then(json => setIncomes(json))
      .then(() => setIsLoading(false));
  }, []);

  function addIncome(income) {
    fetch('http://localhost:4001/incomes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(income),
    })
      .then(response => response.json())
      .then(json => {
        setIncomes(prevIncomes => [...prevIncomes, json]);
        setNotifMsg('A new income is successfully added!');
        setNotifColor('success');
      });
  }

  function deleteIncome(id) {
    const filteredIncomes = incomes.filter(income => income.id !== id);
    setIncomes(filteredIncomes);
    setNotifMsg('The income has been deleted.');
    setNotifColor('danger');
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="incomes" element={<IncomesIndex />}>
            <Route index element={<Incomes incomes={incomes} deleteIncome={deleteIncome} />} />
            <Route path="new" element={<IncomesForm addIncome={addIncome} />} />
            <Route path=":incomeId" element={<IncomesPage />} />
          </Route>
          <Route path="expenses" element={<ExpensesIndex />}>
            <Route index element={<Expenses expenses={expenses} deleteExpense={deleteExpense} />} />
            <Route path="new" element={<ExpensesForm addExpense={addExpense} />} />
            <Route path=":expenseId" element={<ExpensesPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
