import React from 'react';

export function ExpensesTotal({ expenses }) {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  return totalExpenses;
}

export function IncomesTotal({ incomes }) {
  const totalIncomes = incomes.reduce((total, income) => total + parseFloat(income.amount), 0);
  return totalIncomes;
}

export function DifferenceTotal({ incomes, expenses }) {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalIncomes = incomes.reduce((total, income) => total + parseFloat(income.amount), 0);
  const difference = totalIncomes - totalExpenses;
  return difference;
}
