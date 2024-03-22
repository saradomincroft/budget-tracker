import React from 'react';

export default function IncomesTotal({ incomes }) {
    const totalIncomes = incomes.reduce((total, income) => total + income.amount, 0);

    return (
        <div>
            <h2>Total Income: ${totalIncomes}</h2>
        </div>
    );
}
