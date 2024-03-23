import React from 'react';

export default function ExpensesTotal({ expenses }) {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

    return (
        totalExpenses
    );
}
