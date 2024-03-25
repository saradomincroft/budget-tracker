import React from 'react';

export function ExpensesTotal({ expenses }) {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  return totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function IncomesTotal({ incomes }) {
  const totalIncomes = incomes.reduce((total, income) => total + parseFloat(income.amount), 0);
  return totalIncomes.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function DifferenceTotal({ incomes, expenses }) {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalIncomes = incomes.reduce((total, income) => total + parseFloat(income.amount), 0);
  const difference = totalIncomes - totalExpenses;
  return difference.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
