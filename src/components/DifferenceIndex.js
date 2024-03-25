import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { DifferenceTotal } from './Calculations';

export default function DifferenceIndex() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/incomes/')
      .then(response => response.json())
      .then(json => setIncomes(json))
      .catch(error => console.error('Error fetching incomes:', error));

    fetch('http://localhost:4000/expenses/')
      .then(response => response.json())
      .then(json => setExpenses(json))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

  return (
    <div className="text-center">
      <h2>Balance: $<DifferenceTotal incomes={incomes} expenses={expenses} /></h2>
      <Outlet />
    </div>
  );
}
