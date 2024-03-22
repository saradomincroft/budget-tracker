import React from 'react';

export default function ExpensesTotal({ expenses }) {
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

    return (
        <div>
            <h2>Total Expenses</h2>
            <p>Total Amount: ${totalAmount}</p>
        </div>
    );
}
